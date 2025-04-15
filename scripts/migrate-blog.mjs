import { createClient } from '@sanity/client';
import { htmlToBlocks } from '@portabletext/block-tools';
import fetch from 'node-fetch';
import { blogData } from '../src/lib/blog/data.ts'; // Corrected path to .ts file
import { JSDOM } from 'jsdom'; // Needed by htmlToBlocks for parsing

// --- Sanity Client Configuration ---
// WARNING: Hardcoding tokens is generally discouraged for security reasons.
// Consider environment variables for production use cases.
// Revoke this token after the migration is complete.
const SANITY_API_TOKEN = 'skGzhBnrovOBKJSUFYCggTnle7NMqhNpr1w4BeO3XxSKecSWnvsN243UFCHcPFLquk6eaTKnp83EwtsmQcinWbLLJ6NOonD97OYoAk6GGYmFtWOkYCn9e1nmJVqyzLb3wYLMGiSxbWfE0SaS45xqkovbpRmPGroZDEDmvhXSSmDoK2hZ1k31';

const client = createClient({
  projectId: 'mtevlcny',
  dataset: 'production',
  apiVersion: '2024-04-15', // Use a recent API version
  token: SANITY_API_TOKEN,
  useCdn: false, // Must be false to write data
});

// --- Helper Functions ---

// Function to upload an image from a URL to Sanity
async function uploadImageFromUrl(imageUrl, filename = 'image.jpg') {
  if (!imageUrl || !imageUrl.startsWith('http')) {
    console.warn(`Skipping invalid or missing image URL: ${imageUrl}`);
    return null;
  }
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const imageBuffer = await response.buffer(); // Use buffer() with node-fetch v2/v3
    console.log(`Uploading image from ${imageUrl}...`);
    const asset = await client.assets.upload('image', imageBuffer, { filename });
    console.log(`Image uploaded: ${asset._id}`);
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error(`Error uploading image from ${imageUrl}:`, error);
    return null;
  }
}

// Function to find or create an author
async function findOrCreateAuthor(authorData) {
  if (!authorData || !authorData.name) {
      console.warn('Skipping post due to missing author data.');
      return null;
  }
  const authorName = authorData.name;
  console.log(`Processing author: ${authorName}`);

  // Check if author exists
  const query = `*[_type == "author" && name == $name][0]`;
  const params = { name: authorName };
  let author = await client.fetch(query, params);

  if (author) {
    console.log(`Author found: ${author._id}`);
    return { _type: 'reference', _ref: author._id };
  } else {
    console.log(`Author not found, creating: ${authorName}`);
    // Upload avatar if URL exists
    const avatarAsset = await uploadImageFromUrl(authorData.avatar, `${authorName.replace(/\s+/g, '-').toLowerCase()}-avatar.jpg`);

    const newAuthor = {
      _type: 'author',
      name: authorName,
      title: authorData.title || '',
      bio: authorData.bio || '',
      ...(avatarAsset && { avatar: avatarAsset }), // Add avatar only if upload was successful
    };

    try {
      const createdAuthor = await client.create(newAuthor);
      console.log(`Author created: ${createdAuthor._id}`);
      return { _type: 'reference', _ref: createdAuthor._id };
    } catch (error) {
      console.error(`Error creating author ${authorName}:`, error);
      return null;
    }
  }
}

// --- Main Migration Logic ---

async function migrateBlogPosts() {
  console.log('Starting blog post migration...');

  for (const post of blogData) {
    console.log(`\nMigrating post: "${post.title}" (ID: ${post.id})`);

    // 1. Find or Create Author
    const authorRef = await findOrCreateAuthor(post.author);
    if (!authorRef) {
        console.warn(`Skipping post "${post.title}" due to author processing error.`);
        continue; // Skip this post if author couldn't be processed
    }

    // 2. Upload Cover Image
    const coverImageAsset = await uploadImageFromUrl(post.coverImage, `${post.slug}-cover.jpg`);

    // 3. Convert HTML Content to Portable Text
    let portableTextBody = [];
    if (post.content) {
      try {
        console.log('Converting HTML content to Portable Text...');
        // Provide the schema types to htmlToBlocks for better conversion
        // Note: This requires fetching the compiled schema, which is complex in a standalone script.
        // We'll use default conversion for simplicity. For complex HTML, more setup might be needed.
        portableTextBody = htmlToBlocks(post.content, { JSDOM });
        console.log('HTML conversion successful.');
      } catch (error) {
        console.error(`Error converting HTML for post "${post.title}":`, error);
        console.warn('Body content will be empty for this post.');
      }
    } else {
        console.warn(`Post "${post.title}" has no content.`);
    }


    // 4. Prepare Post Document for Sanity
    const sanityPost = {
      _type: 'post',
      // Use a unique ID based on the old ID to prevent duplicates if script runs again
      _id: `migrated-${post.id}`,
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      author: authorRef,
      publishedAt: post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date().toISOString(),
      category: post.category || 'uncategorized',
      tags: post.tags || [],
      excerpt: post.excerpt || '',
      seoDescription: post.seoDescription || post.excerpt || '', // Fallback SEO desc to excerpt
      readingTime: post.readingTime || undefined, // Use undefined if not present
      ...(coverImageAsset && { coverImage: coverImageAsset }), // Add cover image only if upload was successful
      body: portableTextBody,
    };

    // 5. Create or Replace Post in Sanity
    try {
      console.log(`Creating/replacing post document in Sanity...`);
      // Use createOrReplace to handle potential re-runs of the script
      const createdPost = await client.createOrReplace(sanityPost);
      console.log(`Successfully migrated post: ${createdPost._id}`);
    } catch (error) {
      console.error(`Error migrating post "${post.title}":`, error.message || error);
      // Log more details if available
       if (error.response && error.response.body) {
           console.error('Sanity API Error Details:', JSON.stringify(error.response.body, null, 2));
       }
    }
  }

  console.log('\nBlog post migration finished.');
}

// --- Run Migration ---
migrateBlogPosts().catch((err) => {
  console.error('Migration script failed:', err);
  process.exit(1);
});
