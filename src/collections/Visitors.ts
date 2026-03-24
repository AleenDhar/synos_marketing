import type { CollectionConfig } from 'payload'

export const Visitors: CollectionConfig = {
  slug: 'visitors',
  admin: {
    useAsTitle: 'ip',
    defaultColumns: ['ip', 'country', 'city', 'device', 'referrer', 'pagesViewed', 'createdAt'],
    description: 'Visitors who landed on the website.',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'sessionId',
      type: 'text',
      required: true,
      admin: { description: 'Unique session identifier.' },
    },
    {
      name: 'ip',
      type: 'text',
      admin: { description: 'Visitor IP address.' },
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
      name: 'region',
      type: 'text',
    },
    {
      name: 'timezone',
      type: 'text',
    },
    {
      name: 'device',
      type: 'text',
      admin: { description: 'Desktop, Mobile, or Tablet.' },
    },
    {
      name: 'browser',
      type: 'text',
    },
    {
      name: 'os',
      type: 'text',
    },
    {
      name: 'screenResolution',
      type: 'text',
    },
    {
      name: 'language',
      type: 'text',
    },
    {
      name: 'referrer',
      type: 'text',
      admin: { description: 'Where they came from.' },
    },
    {
      name: 'utmSource',
      type: 'text',
    },
    {
      name: 'utmMedium',
      type: 'text',
    },
    {
      name: 'utmCampaign',
      type: 'text',
    },
    {
      name: 'pagesViewed',
      type: 'number',
      defaultValue: 1,
    },
    {
      name: 'timeOnSite',
      type: 'number',
      admin: { description: 'Time on site in seconds.' },
    },
    {
      name: 'maxScrollDepth',
      type: 'number',
      admin: { description: 'Max scroll depth as percentage (0-100).' },
    },
    {
      name: 'clicks',
      type: 'json',
      admin: { description: 'Array of click events: [{x, y, element, text, timestamp}]' },
    },
    {
      name: 'sectionsViewed',
      type: 'json',
      admin: { description: 'Sections the user scrolled through with time spent.' },
    },
    {
      name: 'converted',
      type: 'select',
      defaultValue: 'no',
      options: [
        { label: 'No', value: 'no' },
        { label: 'Waitlist', value: 'waitlist' },
        { label: 'Demo Booking', value: 'demo' },
      ],
    },
    {
      name: 'convertedEmail',
      type: 'email',
      admin: { description: 'Email if they converted (waitlist or demo).' },
    },
  ],
}
