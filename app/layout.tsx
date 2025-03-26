import type { Metadata } from 'next'
import { Inter, Titillium_Web } from 'next/font/google'
import './globals.css'

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  variable: '--font-titillium',
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
    <html lang="en" className={titilliumWeb.variable}>
      <body className="font-titillium overflow-x-hidden">{children}</body>
    </html>
  )
}
