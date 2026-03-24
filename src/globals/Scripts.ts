import type { GlobalConfig } from 'payload'

export const Scripts: GlobalConfig = {
  slug: 'scripts',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headScripts',
      type: 'code',
      admin: {
        language: 'html',
      },
    },
    {
      name: 'bodyScripts',
      type: 'code',
      admin: {
        language: 'html',
      },
    },
    {
      name: 'footerScripts',
      type: 'code',
      admin: {
        language: 'html',
      },
    },
  ],
}
