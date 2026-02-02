'use client';

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { FacebookIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { getTestimonials, getImageUrl, type Testimonial as PayloadTestimonial } from "@/lib/api";

// Adapt Payload testimonial to component format
interface Testimonial {
  id: string;
  name: string;
  title: string;
  testimonial: string;
  date: string;
  facebook?: string;
  linkedin?: string;
  photo?: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        setError(null);
        
        const data = await getTestimonials('uk');
        
        // Adapt Payload data to component format
        const adapted: Testimonial[] = data.map((item: PayloadTestimonial) => ({
          id: item.id,
          name: item.name,
          title: item.title,
          testimonial: item.testimonial,
          date: item.date,
          facebook: item.socialLinks?.facebook,
          linkedin: item.socialLinks?.linkedin,
          photo: getImageUrl(item.photo),
        }));
        
        setTestimonials(adapted);
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
        setError('Не вдалося завантажити відгуки. Спробуйте пізніше.');
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
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
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Відгуки наших клієнтів</h2>
            <p className="text-xl text-muted-foreground">
              Реальні відгуки реальних людей, які вже переїхали в Іспанію через Digital Nomad Visa
            </p>
          </div>
          <div className="text-center">
            <p className="text-destructive">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0 && !loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Відгуки наших клієнтів</h2>
            <p className="text-xl text-muted-foreground">
              Реальні відгуки реальних людей, які вже переїхали в Іспанію через Digital Nomad Visa
            </p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Поки що немає відгуків</p>
          </div>
        </div>
      </section>
    );
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

        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="border-border shadow-elegant hover:shadow-strong transition-smooth">
                      <CardContent className="p-8">
                        {/* Header with avatar and name */}
                        <div className="flex items-start gap-4 mb-6">
                          <Avatar className="w-16 h-16">
                            <AvatarImage
                              src={testimonial.photo}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {testimonial.title}
                            </p>
                            {/* Social links */}
                            <div className="flex gap-3">
                              {testimonial.linkedin && (
                                <a
                                  href={testimonial.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="LinkedIn"
                                >
                                  <LinkedInIcon />
                                </a>
                              )}
                              {testimonial.facebook && (
                                <a
                                  href={testimonial.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="Facebook"
                                >
                                  <FacebookIcon />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Testimonial text */}
                        <p className="text-muted-foreground leading-relaxed line-clamp-7">
                          "{testimonial.testimonial}"
                        </p>

                        {/* Date */}
                        <time 
                          className="text-sm text-muted-foreground mt-4 block" 
                          dateTime={testimonial.date}
                        >
                          {new Date(testimonial.date).toLocaleDateString('uk-UA', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
