import type { GlobalConfig } from 'payload'

export const AnnouncementBanner: GlobalConfig = {
  slug: 'announcement-banner',
  label: 'Announcement Banner',
  access: {
    read: () => true,
  },
  admin: {
    description:
      'Top-of-page announcement bar shown on every page. Toggle "Enabled" to show/hide.',
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: false,
      admin: {
        description: 'Show the banner across the site.',
      },
    },
    {
      name: 'message',
      type: 'text',
      label: 'Message',
      required: true,
      admin: {
        description: 'Short announcement text. Keep under ~120 characters.',
      },
    },
    {
      name: 'style',
      type: 'select',
      label: 'Style',
      defaultValue: 'accent',
      options: [
        { label: 'Accent (orange)', value: 'accent' },
        { label: 'Dark', value: 'dark' },
        { label: 'Success (green)', value: 'success' },
        { label: 'Warning (amber)', value: 'warning' },
        { label: 'Info (blue)', value: 'info' },
      ],
    },
    {
      name: 'link',
      type: 'group',
      label: 'Optional link',
      fields: [
        { name: 'label', type: 'text', label: 'Label (e.g. "Learn more →")' },
        { name: 'url', type: 'text', label: 'URL' },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'dismissible',
      type: 'checkbox',
      label: 'Dismissible',
      defaultValue: true,
      admin: {
        description:
          'If checked, visitors can close the banner. Their choice is remembered until the message changes.',
      },
    },
  ],
}
