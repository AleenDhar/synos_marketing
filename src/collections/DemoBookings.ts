import type { CollectionConfig } from 'payload'

export const DemoBookings: CollectionConfig = {
  slug: 'demo-bookings',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'company', 'dateTime', 'country', 'city', 'ip', 'status', 'createdAt'],
    description: 'Demo call bookings from the landing page.',
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
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'dateTime',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'MMM d, yyyy h:mm a',
        },
        description: 'The scheduled date and time for the demo call.',
      },
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
      name: 'timezone',
      type: 'text',
      admin: {
        description: 'The user\'s local timezone when they booked.',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      admin: {
        description: 'Update the status of this demo booking.',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Any notes about what the prospect wants to discuss.',
      },
    },
  ],
}
