import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://habibportfolio-five.vercel.app'),
  title: 'Habib Nidal | Software Developer | AI & Automation',
  description: 'Habib Nidal builds practical software solutions, AI applications, business automations, and Zoho systems for modern teams.',
  keywords: ['Habib Nidal', 'Software Developer', 'AI Automation', 'Full Stack Developer', 'Zoho Developer', 'n8n Automation'],
  generator: 'Habib Nidal',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Habib Nidal | Software Developer | AI & Automation',
    description: 'Habib Nidal builds practical software solutions, AI applications, business automations, and Zoho systems for modern teams.',
    url: 'https://habibportfolio-five.vercel.app',
    siteName: 'Habib Nidal',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Habib Nidal | Software Developer | AI & Automation',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habib Nidal | Software Developer | AI & Automation',
    description: 'Habib Nidal builds practical software solutions, AI applications, business automations, and Zoho systems for modern teams.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
