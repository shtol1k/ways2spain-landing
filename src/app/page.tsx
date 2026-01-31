import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ProcessSection from '@/components/ProcessSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <ProcessSection />
    </div>
  )
}
