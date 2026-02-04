import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    title: 'Coming Soon - Ways2Spain',
    description: 'Твій шлях до Іспанії — скоро онлайн',
}

export default function ComingSoonLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="uk">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
