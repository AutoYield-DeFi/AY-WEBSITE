// src/lib/blog/sanityClient.ts
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'mtevlcny',
  dataset: 'production',
  apiVersion: '2023-12-01', // Use a recent date for API version
  useCdn: true, // Use CDN for faster, cached responses (set to false if you need fresh data always)
});

export default sanityClient;
