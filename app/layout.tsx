import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'One Rewards - Customer Loyalty Platform',
  description: 'The complete loyalty rewards platform for retail businesses.',
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
