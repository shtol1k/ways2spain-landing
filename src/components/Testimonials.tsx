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

interface Testimonial {
  id: string;
  name: string;
  title: string;
  testimonial: string;
  date: string;
  facebook: string;
  linkedin: string;
  photo?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Юлія Петренко",
    title: "Digital Marketer",
    testimonial: "Як фрілансер, боялася, що не зможу підтвердити стабільний дохід. Але мені детально пояснили, які документи потрібні, і допомогли все правильно оформити. Візу схвалили з першого разу! Дуже задоволена результатом.",
    date: "19.01.25",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "2",
    name: "Дмитро Мельник",
    title: "Full-stack Developer",
    testimonial: "Перехід з тимчасового захисту на офіційний ВНЖ — це було найкраще рішення для мене та моєї родини. Команда допомогла з усіма документами, перекладами та записом. Тепер маємо спокій та стабільність в Іспанії.",
    date: "19.01.25",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Олександра Коваленко",
    title: "UX Designer",
    testimonial: "Дякую за професійний супровід! Процес оформлення Digital Nomad Visa здавався складним, але з вашою допомогою все пройшло швидко і без стресу. Отримала TIE за 2 місяці. Рекомендую всім, хто хоче легально жити в Іспанії!",
    date: "19.01.25",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "4",
    name: "Марина Шевченко",
    title: "Content Manager",
    testimonial: "Не можу не відзначити увагу до деталей і постійну підтримку на кожному етапі. Особливо допомогла консультація по податках — зекономила багато грошей завдяки пільговому режиму 24%. Дуже вдячна!",
    date: "19.01.25",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "5",
    name: "Андрій Бондаренко",
    title: "Content Manager",
    testimonial: "Оформлювали візу для всієї родини — я, дружина і двоє дітей. Весь процес зайняв 3 місяці від консультації до отримання карток резидента. Все чітко, прозоро, без прихованих платежів. Рекомендую!",
    date: "19.01.25",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
];

const Testimonials = () => {
  const [testimonials] = useState<Testimonial[]>(testimonialsData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to show skeleton state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
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
