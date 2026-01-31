import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Ways2Spain - Digital Nomad Visa Spain',
  description: 'Допомагаємо віддаленим спеціалістам з родинами жити і працювати в Іспанії з Digital Nomad Visa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar will be added here in next steps */}
          <main className="flex-1">
            {children}
          </main>
          {/* Footer will be added here in next steps */}
        </div>
      </body>
    </html>
  )
}
