import Hero from '@/components/Hero'
import Features from '@/components/Features'
import dynamic from 'next/dynamic'
import ProcessSection from '@/components/ProcessSection'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

// Dynamic import для Testimonials з carousel (heavy component)
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Відгуки наших клієнтів</h2>
          <p className="text-xl text-muted-foreground">
            Реальні відгуки реальних людей, які вже переїхали в Іспанію через Digital Nomad Visa
          </p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground">Завантаження відгуків...</p>
        </div>
      </div>
    </section>
  ),
})

export const metadata: Metadata = {
  title: 'Ways 2 Spain - Релокація в Іспанію через Digital Nomad Visa',
  description: 'Професійна допомога з релокацією в Іспанію. Digital Nomad Visa, NIE, TIE, резиденція. 300+ успішних кейсів, 98% схвалених заявок. Персональний супровід на кожному етапі.',
  keywords: ['релокація Іспанія', 'Digital Nomad Visa', 'NIE Іспанія', 'імміграція в Іспанію', 'переїзд в Іспанію', 'резиденція Іспанія', 'Ways2Spain'],
  openGraph: {
    title: 'Ways 2 Spain - Релокація в Іспанію через Digital Nomad Visa',
    description: 'Професійна допомога з релокацією в Іспанію. 300+ успішних кейсів, 98% схвалених заявок.',
    url: 'https://ways2spain.com',
    siteName: 'Ways 2 Spain',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ways 2 Spain - Релокація в Іспанію',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ways 2 Spain - Релокація в Іспанію',
    description: 'Професійна допомога з релокацією в Іспанію. 300+ успішних кейсів.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://ways2spain.com',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <ProcessSection />
      <CTASection />
    </div>
  )
}
