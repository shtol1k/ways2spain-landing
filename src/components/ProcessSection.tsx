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
      description: "Супроводжуємо до отримання ТІЕ",
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
          {steps.map((item, index) => (
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
  );
};

export default ProcessSection;
