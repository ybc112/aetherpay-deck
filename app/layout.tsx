import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AetherPay - AI-Powered Cross-Border Payments',
  description: 'World\'s First AI Oracle Cross-Border Payment Solution - ETHShanghai 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}