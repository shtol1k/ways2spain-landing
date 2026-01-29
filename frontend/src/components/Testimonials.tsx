import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { getTestimonials, type Testimonial } from "@/lib/strapi";
import { TelegramIcon, FacebookIcon, InstagramIcon, XIcon, LinkedInIcon } from "@/components/ui/social-icons";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        setError('Не вдалося завантажити відгуки');
        console.error('Error loading testimonials:', err);
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
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

  if (testimonials.length === 0) {
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
                <CarouselItem key={testimonial.documentId} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="border-border shadow-elegant hover:shadow-strong transition-smooth">
                      <CardContent className="p-8">
                        {/* Header with avatar and name */}
                        <div className="flex items-start gap-4 mb-6">
                          <Avatar className="w-16 h-16">
                            <AvatarImage
                              src={testimonial.Photo && testimonial.Photo.length > 0 ? `${STRAPI_URL}${testimonial.Photo[0].url}` : undefined}
                              alt={testimonial.Photo && testimonial.Photo.length > 0 ? testimonial.Photo[0].alternativeText || testimonial.Name : testimonial.Name}
                            />
                            <AvatarFallback>
                              {testimonial.Name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1">{testimonial.Name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {testimonial.Title}
                            </p>
                            {/* Social links */}
                            <div className="flex gap-3">
                              {testimonial.LinkedIn && (
                                <a
                                  href={testimonial.LinkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="LinkedIn"
                                >
                                  <LinkedInIcon />
                                </a>
                              )}
                              {testimonial.Twitter && (
                                <a
                                  href={testimonial.Twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="X (Twitter)"
                                >
                                  <XIcon />
                                </a>
                              )}
                              {testimonial.Instagram && (
                                <a
                                  href={testimonial.Instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="Instagram"
                                >
                                  <InstagramIcon />
                                </a>
                              )}
                              {testimonial.Telegram && (
                                <a
                                  href={testimonial.Telegram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="Telegram"
                                >
                                  <TelegramIcon />
                                </a>
                              )}
                              {testimonial.Facebook && (
                                <a
                                  href={testimonial.Facebook}
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
                          "{testimonial.Testimonial}"
                        </p>

                        {/* Date */}
                        <time 
                          className="text-sm text-muted-foreground mt-4 block" 
                          dateTime={testimonial.Date}
                        >
                          {new Date(testimonial.Date).toLocaleDateString('uk-UA', {
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
