import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Auto-generate slug from title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}, // Link to the Author schema
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // Make cover image required if needed
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // Default to current time
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Primary category for the post (e.g., market-insights, tutorials)',
      // Optional: Define a list of allowed categories
      // options: {
      //   list: [
      //     {title: 'Market Insights', value: 'market-insights'},
      //     {title: 'Tutorials', value: 'tutorials'},
      //     {title: 'DeFi', value: 'defi'},
      //     {title: 'Liquidity', value: 'liquidity'},
      //     // Add more categories as needed
      //   ],
      // },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}]
        }
      ],
      options: {
        layout: 'tags',
      },
      description: 'Select one or more existing tags',
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
          options: {
            filter: ({document}) => ({
              filter: '_type == "post" && _id != $id',
              params: {id: document._id}
            })
          }
        }
      ],
      description: 'Select up to 3 related posts',
      validation: Rule => Rule.max(3)
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short summary of the post for previews.',
      validation: (Rule) => Rule.max(200).warning('Excerpt should ideally be under 200 characters'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array', // Use array for Portable Text
      of: [
        {
          type: 'block', // Standard text blocks (paragraphs, headings, etc.)
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image', // Allow images within the body
          options: {hotspot: true},
        },
        // Optional: Add a code block type if needed
        // {
        //   type: 'code',
        //   options: {
        //     withFilename: true, // Show filename input
        //   },
        // },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Custom description for search engine results (optional, defaults to excerpt)',
      validation: (Rule) => Rule.max(160).warning('SEO descriptions should be concise, ideally under 160 characters'),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes (optional)',
      validation: (Rule) => Rule.integer().positive(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const {author, date} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      return {...selection, subtitle: author ? `by ${author} on ${formattedDate}` : formattedDate}
    },
  },
})
