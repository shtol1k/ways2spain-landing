import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакти - Ways 2 Spain | Зв\'яжіться з нами',
  description: 'Зв\'яжіться з Ways 2 Spain для консультації щодо релокації в Іспанію. Telegram: @ways2spain, Instagram: @ways2spain, Email: hello@ways2spain.com',
  keywords: ['контакти', 'зв\'язок', 'Ways 2 Spain', 'консультація', 'Digital Nomad Visa'],
  openGraph: {
    title: 'Контакти - Ways 2 Spain',
    description: 'Зв\'яжіться з нами для консультації щодо релокації в Іспанію',
    url: 'https://ways2spain.com/contact',
    siteName: 'Ways 2 Spain',
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Контакти - Ways 2 Spain',
    description: 'Зв\'яжіться з нами для консультації щодо релокації в Іспанію',
  },
  alternates: {
    canonical: 'https://ways2spain.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
