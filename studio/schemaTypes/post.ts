import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code block',
          fields: [
            defineField({ name: 'language', title: 'Language', type: 'string' }),
            defineField({ name: 'code', title: 'Code', type: 'text' }),
          ],
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: { list: ['info', 'warning', 'tip'] },
            }),
            defineField({ name: 'body', title: 'Body', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading time (minutes)',
      type: 'number',
    }),
  ],
});