import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "dfuji  Portfolio",
  description: "Portfolio site inspired by once.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  )
}
