import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Crypto News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Wpisz chwytliwy tytuł newsa krypto.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Adres URL artykułu (wygeneruj go przyciskiem Generate).',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      description: 'Miejsce na Twoje szczegółowe analizy i newsy.',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }), // Tutaj brakowało );
  ], // Tutaj brakowało ]
})