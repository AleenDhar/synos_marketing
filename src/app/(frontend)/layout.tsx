import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Media } from '@/payload-types'
import './styles.css'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayload({ config })
    const siteSettings = await payload.findGlobal({ slug: 'site-settings' })

    const faviconMedia = siteSettings?.favicon as Media | null
    const faviconUrl = faviconMedia?.url ?? '/favicon.ico'

    return {
      title: siteSettings?.siteTitle ?? 'synosai',
      description: siteSettings?.siteDescription ?? 'The AI employee platform that works 24/7.',
      icons: {
        icon: faviconUrl,
      },
    }
  } catch {
    return {
      title: 'synosai',
      description: 'The AI employee platform that works 24/7.',
      icons: { icon: '/favicon.ico' },
    }
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
