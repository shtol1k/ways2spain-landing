import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
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
      description: "Отримуємо візу та TIE (ідентифікаційний номер іноземця)",
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Як це працює</h2>
          <p className="text-xl text-muted-foreground">
            Простий процес у пʼять кроків — від консультації до отримання візи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">
                {step.step}
              </div>
              <div className="relative z-10 pt-8">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Готові почати?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Отримайте безкоштовну консультацію та дізнайтеся, як отримати Digital Nomad Visa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="xl" variant="secondary" className="shadow-elegant">
                Безкоштовна консультація
              </Button>
            </Link>
            <Link href="/calculator">
              <Button 
                size="xl" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Розрахувати вартість
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
