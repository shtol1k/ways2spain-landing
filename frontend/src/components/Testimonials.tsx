import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Олександра Коваленко",
    role: "UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandra",
    text: "Дякую за професійний супровід! Процес оформлення Digital Nomad Visa здавався складним, але з вашою допомогою все пройшло швидко і без стресу. Отримала TIE за 2 місяці. Рекомендую всім, хто хоче легально жити в Іспанії!",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Дмитро Мельник",
    role: "Full-stack Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmytro",
    text: "Перехід з тимчасового захисту на офіційний ВНЖ — це було найкраще рішення для мене та моєї родини. Команда допомогла з усіма документами, перекладами та записом. Тепер маємо спокій та стабільність в Іспанії.",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 3,
    name: "Марина Шевченко",
    role: "Content Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryna",
    text: "Не можу не відзначити уважність до деталей і постійну підтримку на кожному етапі. Особливо допомогла консультація по податках — зекономила багато грошей завдяки пільговому режиму 24%. Дуже вдячна!",
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Андрій Бондаренко",
    role: "Product Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andriy",
    text: "Оформлювали візу для всієї родини — я, дружина і двоє дітей. Весь процес зайняв 3 місяці від консультації до отримання карток резидента. Все чітко, прозоро, без прихованих платежів. Рекомендую!",
    social: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "Юлія Петренко",
    role: "Digital Marketer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yulia",
    text: "Як фрілансер, боялася, що не зможу підтвердити стабільний дохід. Але мені детально пояснили, які документи потрібні, і допомогли все правильно оформити. Візу схвалили з першого разу! Дуже задоволена результатом.",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-6">Відгуки наших клієнтів</h2>
          <p className="text-xl text-muted-foreground">
            Понад 200 успішних кейсів з оформлення Digital Nomad Visa
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
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
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {testimonial.role}
                            </p>
                            {/* Social links */}
                            <div className="flex gap-3">
                              {testimonial.social.linkedin && (
                                <a
                                  href={testimonial.social.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="LinkedIn"
                                >
                                  <Linkedin className="w-5 h-5" />
                                </a>
                              )}
                              {testimonial.social.twitter && (
                                <a
                                  href={testimonial.social.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="Twitter"
                                >
                                  <Twitter className="w-5 h-5" />
                                </a>
                              )}
                              {testimonial.social.instagram && (
                                <a
                                  href={testimonial.social.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-smooth"
                                  aria-label="Instagram"
                                >
                                  <Instagram className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Testimonial text */}
                        <p className="text-muted-foreground leading-relaxed line-clamp-7">
                          "{testimonial.text}"
                        </p>

                        {/* Rating stars */}
                        <div className="flex gap-1 mt-6">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-secondary text-secondary"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
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
