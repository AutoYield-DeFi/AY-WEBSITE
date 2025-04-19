import { createClient } from '@sanity/client';

// Ensure SANITY_API_TOKEN is set
const SANITY_API_TOKEN = process.env.SANITY_API_TOKEN;
if (!SANITY_API_TOKEN) {
  console.error('Error: SANITY_API_TOKEN environment variable is not set.');
  process.exit(1);
}

// Sanity client configuration
const client = createClient({
  projectId: 'mtevlcny',
  dataset: 'production',
  apiVersion: '2024-04-15',
  token: SANITY_API_TOKEN,
  useCdn: false,
});

// Helper to get tag document ID by title
async function getTagId(title) {
  const tag = await client.fetch(
    `*[_type == "tag" && title == $title][0]`,
    { title }
  );
  return tag ? tag._id : null;
}

async function migrateTags() {
  console.log('Starting tag migration...');

  // Fetch all posts with raw tag strings
  const posts = await client.fetch(`*[_type == "post" && defined(tags)]{ _id, tags }`);

  // Collect unique tag titles
  const tagSet = new Set();
  posts.forEach(post => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach(t => tagSet.add(t));
    }
  });

  console.log(`Found ${tagSet.size} unique tag titles.`);

  // Create or skip existing tag documents
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
