import { getTestimonials, getImageUrl, type Testimonial as PayloadTestimonial } from "@/lib/api";
import { TestimonialsCarousel, type Testimonial } from "./TestimonialsCarousel";

export default async function Testimonials() {
  let testimonials: Testimonial[] = [];

  try {
    const data = await getTestimonials('uk');
    
    // Adapt Payload data to component format
    testimonials = data.map((item: PayloadTestimonial) => ({
      id: item.id,
      name: item.name,
      title: item.title,
      testimonial: item.testimonial,
      date: item.date,
      facebook: item.socialLinks?.facebook,
      linkedin: item.socialLinks?.linkedin,
      photo: getImageUrl(item.photo),
    }));
  } catch (err) {
    console.error('Error loading testimonials:', err);
    // Continue with empty array - testimonials are non-critical
  }

  // Don't show error message, just skip section if no testimonials
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Відгуки наших клієнтів</h2>
          <p className="text-xl text-muted-foreground">
            Реальні відгуки реальних людей, які вже переїхали в Іспанію через Digital Nomad Visa
          </p>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
