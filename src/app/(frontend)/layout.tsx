import React from 'react'
import type { Metadata } from 'next'
import { Inter, Archivo_Black, Anton, VT323 } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { AnnouncementBanner, Media } from '@/payload-types'
import { SynosAnnouncementBanner } from '@/components/SynosAnnouncementBanner'
import { SynosFloatingPromo } from '@/components/SynosFloatingPromo'
import { SynosLoadingScreen } from '@/components/SynosLoadingScreen'
import './styles.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brand',
  display: 'swap',
})

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayload({ config })
    const siteSettings = await payload.findGlobal({ slug: 'site-settings' })

    const faviconMedia = siteSettings?.favicon as Media | null
    const faviconUrl = faviconMedia?.url ?? '/favicon.ico'

    return {
      title: siteSettings?.siteTitle ?? 'SynosAI',
      description: siteSettings?.siteDescription ?? 'The AI employee platform that works 24/7.',
      icons: {
        icon: faviconUrl,
      },
      openGraph: {
        siteName: siteSettings?.siteTitle ?? 'SynosAI',
      },
    }
  } catch {
    return {
      title: 'SynosAI',
      description: 'The AI employee platform that works 24/7.',
      icons: { icon: '/favicon.ico' },
      openGraph: {
        siteName: 'SynosAI',
      },
    }
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  let siteTitle = 'SynosAI'
  let banner: AnnouncementBanner | null = null
  try {
    const payload = await getPayload({ config })
    const [siteSettings, announcementBanner] = await Promise.all([
      payload.findGlobal({ slug: 'site-settings' }),
      payload
        .findGlobal({ slug: 'announcement-banner' })
        .catch(() => null) as Promise<AnnouncementBanner | null>,
    ])
    siteTitle = siteSettings?.siteTitle ?? 'SynosAI'
    banner = announcementBanner
  } catch (error) {
    console.error('Error fetching globals for layout:', error)
  }

  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} ${anton.variable} ${vt323.variable}`}>
      <head>
        {/* Preload heavy assets — kicked off as soon as the HTML parses so they
            finish downloading while the loading screen is on display. */}
        <link rel="preload" as="image" href="/shrine.png" />
        <link rel="preload" as="image" href="/synos-hero.png" />
        <link rel="preload" as="image" href="/hand-phone.png" />
        <link rel="preload" as="fetch" href="/iphone.glb" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteTitle,
              url: 'https://synosai.com',
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SynosLoadingScreen />
        <SynosAnnouncementBanner
          enabled={banner?.enabled}
          message={banner?.message}
          style={banner?.style}
          dismissible={banner?.dismissible}
          link={banner?.link}
        />
        <main>{children}</main>
        <SynosFloatingPromo />
      </body>
    </html>
  )
}
