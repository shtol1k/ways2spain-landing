import { FileCheck, Clock, Users } from "lucide-react";

const features = [
  {
    type: "image",
    imageSrc: "/icon_communication.svg",
    imageAlt: "Завжди на зв'язку",
    title: "Завжди на зв'язку",
    description: "Оперативна та легка комунікація. Необмежена кількість консультацій протягом процесу підготовки кейсу.",
  },
  {
    type: "icon",
    icon: FileCheck,
    title: "Повний пакет документів",
    description: "Готуємо всі необхідні документи, переклади, нотаріальні завірення. Ви зосереджуєтесь на роботі.",
  },
  {
    type: "icon",
    icon: Clock,
    title: "Швидкий процес",
    description: "Доступ до системи відстеження статусу підготовки документів. Чіткі терміни на кожному етапі.",
  },
  {
    type: "icon",
    icon: Users,
    title: "Підтримка родини",
    description: "Можливість легалізації членів сім\'ї. Комплексний супровід для всієї родини.",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Чому обирають нас</h2>
          <p className="text-xl text-muted-foreground">
            Індивідуальний супровід і надійні партнери. Професійно і зрозуміло.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-elegant hover:shadow-strong transition-smooth border border-border hover:scale-105"
            >
              {feature.type === "image" ? (
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-neutral-100 mb-6">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="w-12 h-12"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
