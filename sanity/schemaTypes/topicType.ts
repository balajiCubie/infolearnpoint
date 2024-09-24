import {defineField, defineType} from 'sanity'

export const topicType = defineType({
  name: 'topic',
  title: 'topic',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'lessonTitle',
              title: 'Lesson Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },

          ],
        },
      ],
    }),
  ],
})
