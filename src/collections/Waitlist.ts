import type { CollectionConfig } from 'payload'

export const Waitlist: CollectionConfig = {
  slug: 'waitlist',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'company', 'country', 'city', 'ip', 'createdAt'],
    description: 'People who signed up for the waitlist.',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'ip',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'useCase',
      type: 'text',
      admin: {
        description: 'What type of AI employee the user wants',
      },
    },
  ],
}
