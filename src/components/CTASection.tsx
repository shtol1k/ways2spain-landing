import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Безкоштовна первинна консультація.",
    "Прозора ціна без прихованих витрат.",
    <>
      Підтримка українською, російською та англійською мовами.
      <br />
      Ми не співпрацюємо з громадянами РФ.
    </>,
    <>
      Гарантія повернення коштів у разі відмови (крім витрат на сторонні послуги – переклади, засвідчення документів, тощо). Повторна подача безкоштовно.
    </>,
  ];

  return (
    <section className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/digital-nomad.jpg"
              alt="Digital nomad workspace in Spain"
              className="rounded-2xl shadow-strong w-full h-auto"
            />
          </div>
          <div>
            <h2 className="mb-6">
              Готові розпочати своє життя в Іспанії?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ми беремо на себе всю бюрократію, щоб ви могли зосередитись на своїй роботі та новому житті в Іспанії.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="hero" size="xl">
                  Отримати консультацію
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="xl">
                  Переглянути послуги
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
