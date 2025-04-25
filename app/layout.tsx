import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'One Rewards - Earn Endless Rewards',
  description: 'The complete loyalty rewards platform for retail businesses.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'One Rewards - Earn Endless Rewards',
    description: 'Transform your shopping experience with One Rewards. Earn points, get exclusive deals, and enjoy rewards at your favorite stores.',
    url: 'https://onerewards-61hh.vercel.app/',
    siteName: 'One Rewards',
    images: [
      {
        url: '/images/mini_user.png',
        width: 1200,
        height: 630,
        alt: 'One Rewards App Preview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Rewards - Earn Endless Rewards',
    description: 'Transform your shopping experience with One Rewards. Earn points, get exclusive deals, and enjoy rewards at your favorite stores.',
    images: ['/images/og-image.jpg'],
    creator: '@onerewards',
    site: '@onerewards'
  },
  metadataBase: new URL('https://onerewards-61hh.vercel.app/'),
  keywords: ['loyalty rewards', 'retail rewards', 'customer loyalty program', 'shopping rewards', 'One Rewards'],
  authors: [{ name: 'One Rewards Team' }],
  creator: 'One Rewards',
  publisher: 'One Rewards',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={titilliumWeb.className}>

      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
