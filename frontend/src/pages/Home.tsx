import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import digitalNomadImage from "@/assets/digital-nomad.jpg";
import Testimonials from "@/components/Testimonials";
import { StrapiDebugPanel } from "@/components/StrapiDebugPanel";

const Home = () => {
  return (
    <div className="min-h-screen">
      <StrapiDebugPanel />
      <Hero />
      <Features />
      <Testimonials />

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Як це працює</h2>
            <p className="text-xl text-muted-foreground">
              Простий процес у пʼять кроків — від консультації до отримання візи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Консультація",
                description: "Аналізуємо вашу ситуацію та визначаємо оптимальний шлях",
              },
              {
                step: "02",
                title: "Договір",
                description: "Укладення договору надання послуг",
              },
              {
                step: "03",
                title: "Підготовка",
                description: "Збираємо та готуємо всі необхідні документи",
              },
              {
                step: "04",
                title: "Подача",
                description: "Подаємо документи до міграційної служби",
              },
              {
                step: "05",
                title: "Отримання",
                description: "Супроводжуємо до отримання ТІЕ",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-secondary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-20 lg:py-32 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={digitalNomadImage}
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
                {[
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
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Отримати консультацію
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="xl">
                    Переглянути послуги
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
