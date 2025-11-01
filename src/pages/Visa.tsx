import { CheckCircle2, FileText, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Visa = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">Digital Nomad Visa в Іспанії</h1>
          <p className="text-xl text-muted-foreground">
            Повна інформація про візу для віддалених спеціалістів — від умов до процедури отримання
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Who Can Apply */}
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border">
            <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-6">Хто може отримати</h2>
            <ul className="space-y-4">
              {[
                "Фрілансери з міжнародними клієнтами",
                "ІТ-спеціалісти на віддаленій роботі",
                "Контрактники з іноземними компаніями",
                "Підприємці з онлайн-бізнесом",
                "Члени родини основного заявника",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border">
            <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-6">Основні вимоги</h2>
            <ul className="space-y-4">
              {[
                "Дохід від €2,400/місяць (збільшується для родини)",
                "Мінімум 1 рік досвіду віддаленої роботи",
                "Діючий контракт або доказ роботи",
                "Медична страховка на весь період",
                "Чиста кримінальна історія",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Покрокова процедура</h2>
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Підготовка документів",
                description: "Збір та легалізація всіх необхідних документів, переклади, апостилі",
                duration: "2-4 тижні",
              },
              {
                step: 2,
                title: "Подача заявки",
                description: "Запис та подача документів до консульства або міграційної служби",
                duration: "1 тиждень",
              },
              {
                step: 3,
                title: "Розгляд заявки",
                description: "Офіційний розгляд документів міграційною службою Іспанії",
                duration: "1-3 місяці",
              },
              {
                step: 4,
                title: "Отримання візи та ТІЕ",
                description: "Отримання візи, в'їзд до Іспанії та оформлення картки резидента (TIE)",
                duration: "2-4 тижні",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-strong transition-smooth"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{item.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Duration and Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Строк дії візи</h3>
            <p className="text-primary-foreground/90 mb-6">
              Віза видається на термін до 1 року з можливістю продовження до 5 років.
              Після 5 років можливість отримання постійного резидентства.
            </p>
            <ul className="space-y-2">
              {[
                "Перша віза: до 12 місяців",
                "Продовження: ще 2 роки",
                "Друге продовження: ще 2 роки",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-8 text-secondary-foreground">
            <h3 className="text-2xl font-bold mb-4">Переваги візи</h3>
            <p className="text-secondary-foreground/90 mb-6">
              Digital Nomad Visa надає повний легальний статус для життя та роботи в Іспанії.
            </p>
            <ul className="space-y-2">
              {[
                "Право працювати віддалено",
                "Доступ до медицини",
                "Можливість відкрити банківський рахунок",
                "Безвіз по Шенгенській зоні",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Готові розпочати процес отримання візи?
          </h3>
          <p className="text-muted-foreground mb-8">
            Зв'яжіться з нами для безкоштовної консультації та оцінки ваших шансів
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Отримати консультацію
              </Button>
            </Link>
            <Link to="/calculator">
              <Button variant="outline" size="xl">
                Розрахувати вартість
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
