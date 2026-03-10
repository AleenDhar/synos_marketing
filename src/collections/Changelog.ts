import type { CollectionConfig } from 'payload'

export const Changelog: CollectionConfig = {
  slug: 'changelog',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Feature', value: 'feature' },
        { label: 'Improvement', value: 'improvement' },
        { label: 'Fix', value: 'fix' },
        { label: 'Integration', value: 'integration' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
