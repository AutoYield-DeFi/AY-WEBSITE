import { createClient } from '@sanity/client';

// Ensure SANITY_API_TOKEN is set
const SANITY_API_TOKEN = "skGzhBnrovOBKJSUFYCggTnle7NMqhNpr1w4BeO3XxSKecSWnvsN243UFCHcPFLquk6eaTKnp83EwtsmQcinWbLLJ6NOonD97OYoAk6GGYmFtWOkYCn9e1nmJVqyzLb3wYLMGiSxbWfE0SaS45xqkovbpRmPGroZDEDmvhXSSmDoK2hZ1k31";


// Sanity client configuration
const client = createClient({
  projectId: 'mtevlcny',
  dataset: 'production',
  apiVersion: '2024-04-15',
  token: SANITY_API_TOKEN,
  useCdn: false,
});

async function migrateTags() {
  console.log('Starting tag migration...');

  // Fetch all posts with tags
  const posts = await client.fetch(`*[_type == "post" && defined(tags)]{ tags }`);

  // Collect unique tag titles
  const tagSet = new Set();
  posts.forEach(post => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach(t => tagSet.add(t));
    }
  });

  console.log(`Found ${tagSet.size} unique tag titles.`);

  // Create or skip existing tags
  for (const title of tagSet) {
    try {
      const existing = await client.fetch(
        `*[_type == "tag" && title == $title][0]`,
        { title }
      );
      if (existing) {
        console.log(`Tag exists: ${title}`);
      } else {
        const created = await client.create({ _type: 'tag', title });
        console.log(`Created tag: ${created._id} (“${title}”)`);
      }
    } catch (err) {
      console.error(`Error processing tag "${title}":`, err);
    }
  }

  console.log('Tag migration completed.');
}

// Execute
migrateTags().catch(err => {
  console.error('Migration script failed:', err);
  process.exit(1);
});
