import {defineField, defineType} from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'Course',
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
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'topic',
        title: 'topic',
        type: 'array',
        of: [{type: 'reference', to: {type: 'topic'}}],
      }),




   ],

  preview: {
    select: {
      title: 'title',

    },
    prepare(selection) {

      return {...selection}
    },
  },
})
