import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Templates } from './collections/Templates'
import { Integrations } from './collections/Integrations'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'
import { Testimonials } from './collections/Testimonials'
import { CaseStudies } from './collections/CaseStudies'
import { Changelog } from './collections/Changelog'
import { Faqs } from './collections/Faqs'
import { Waitlist } from './collections/Waitlist'
import { DemoBookings } from './collections/DemoBookings'
import { Visitors } from './collections/Visitors'

import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { SiteSettings } from './globals/SiteSettings'
import { Scripts } from './globals/Scripts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Pages,
    Posts,
    Templates,
    Integrations,
    Categories,
    Tags,
    Testimonials,
    CaseStudies,
    Changelog,
    Faqs,
    Waitlist,
    DemoBookings,
    Visitors,
    Media,
    Users,
  ],
  globals: [Header, Footer, SiteSettings, Scripts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
