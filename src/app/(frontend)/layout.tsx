import React from 'react'
import './styles.css'

export const metadata = {
  description: 'The future of visual development with AI.',
  title: 'Synos AI',
  icons: {
    icon: '/favicon.ico',
  },
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
