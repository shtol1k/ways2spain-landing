import { Calendar, Clock, Phone, CheckCircle2 } from "lucide-react";

const Consultation = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - centered with max-w-3xl */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 mb-6">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-4">Безкоштовна консультація</h1>
          <p className="text-xl text-muted-foreground">
            Запишіться на зручний для вас час і отримайте персональні рекомендації
          </p>
        </div>

        {/* Benefits - full width grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border shadow-elegant hover:shadow-strong transition-smooth">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">30 хвилин</h3>
            <p className="text-sm text-muted-foreground">
              Оптимальний час для розбору вашого кейсу та відповідей на питання
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-elegant hover:shadow-strong transition-smooth">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Персонально</h3>
            <p className="text-sm text-muted-foreground">
              Аналіз вашої унікальної ситуації та рекомендації крок за кроком
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-elegant hover:shadow-strong transition-smooth">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Онлайн</h3>
            <p className="text-sm text-muted-foreground">
              Консультація через Google Meet у зручний для вас час
            </p>
          </div>
        </div>

        {/* Google Calendar header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-2">Оберіть дату та час</h2>
          <p className="text-muted-foreground">
            Натисніть на вільний слот у календарі для запису на консультацію
          </p>
        </div>

        {/* Google Calendar iframe - full width like Benefits grid */}
        <div className="rounded-xl overflow-hidden border border-border shadow-elegant mb-12">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3jTGctAysecOcYEy5V3MKyBfqGNW1UlWUBxuNtv5XJrgNBSre5zhTu18d5jw8-TMYeB6BCl9uz?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
          ></iframe>
        </div>

        {/* Additional Info - centered with max-w-3xl */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-400/10 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-4">Що отримаєте на консультації?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Персональну оцінку вашого кейсу переїзду до Іспанії</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Покроковий план дій залежно від вашої ситуації</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Відповіді на всі ваші питання щодо віз, документів та життя в Іспанії</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Рекомендації по документах та підготовці до подання заявки</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Інформацію про терміни, вартість та можливі ризики</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info - centered with max-w-3xl */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Не знайшли зручний час або маєте термінове питання?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth"
            >
              Написати нам
            </a>
            <a
              href="tel:+34627073891"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-smooth"
            >
              <Phone className="w-4 h-4 mr-2" />
              +34 62 707 3891
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
