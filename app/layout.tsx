import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Voice Queue Manager — Fair Speaking Queue for Voice Channels',
  description: 'Discord bot with web dashboard for managing voice channel speaking queues. Hand-raising, time limits, and turn notifications for community managers and educators.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5f1de600-a4cc-4456-ae43-59db95b9210b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
