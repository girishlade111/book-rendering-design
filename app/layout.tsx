import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import ClientLayout from "./client-layout"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/x-101-front-cover.jpeg" as="image" crossOrigin="anonymous" />
        <link rel="preload" href="/images/x-101-back-cover.jpeg" as="image" crossOrigin="anonymous" />
        <link rel="preload" href="/images/we-are-so-back-cover-optimized.jpeg" as="image" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/images/we-are-so-back-back-cover-optimized.jpeg"
          as="image"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/images/vibe-coding-front-cover.jpeg" as="image" crossOrigin="anonymous" />
        <link rel="preload" href="/images/vibe-coding-back-cover.jpeg" as="image" crossOrigin="anonymous" />
        <link rel="preload" href="/images/how-to-say-please-front-cover.jpeg" as="image" crossOrigin="anonymous" />
        <link rel="preload" href="/images/how-to-say-please-back-cover.jpeg" as="image" crossOrigin="anonymous" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
body {
  transition: background-color 1s ease;
}
        `}</style>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
