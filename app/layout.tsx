import TheHeader from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from 'next'
import TheFooter from "@/components/TheFooter";

export const metadata: Metadata = {
  title: 'Test',
  description: '6eneration'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main className="container">
          {children}
        </main>
        <TheFooter />
      </body>
    </html>
  )
}
