import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// Import the schemas we created
import author from './schemas/author'
import post from './schemas/post'

export default defineConfig({
  name: 'default',
  title: 'AutoYield',

  projectId: 'mtevlcny',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // Add our schemas to the types array
    types: [author, post],
  },
})
