import { Calendar, Clock, Phone, CircleCheckBig, Send } from "lucide-react";

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
              <CircleCheckBig className="w-6 h-6 text-primary" />
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

        {/* Additional Info - no gradient background */}
        <div className="rounded-xl p-8 border border-border mb-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Що отримаєте на консультації?</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CircleCheckBig className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-foreground">Персональну оцінку вашого кейсу переїзду до Іспанії</span>
              </li>
              <li className="flex items-start">
                <CircleCheckBig className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-foreground">Покроковий план дій залежно від вашої ситуації</span>
              </li>
              <li className="flex items-start">
                <CircleCheckBig className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-foreground">Відповіді на всі ваші питання щодо віз, документів та життя в Іспанії</span>
              </li>
              <li className="flex items-start">
                <CircleCheckBig className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-foreground">Рекомендації по документах та підготовці до подання заявки</span>
              </li>
              <li className="flex items-start">
                <CircleCheckBig className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-foreground">Інформацію про терміни, вартість та можливі ризики</span>
              </li>
            </ul>

            {/* Contact buttons */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Не знайшли зручний час або маєте термінове питання?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-smooth shadow-strong font-semibold h-14 rounded-lg px-10 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Написати нам
                </a>
                <a
                  href="tel:+34627073891"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-smooth border border-border bg-background hover:bg-muted h-14 rounded-lg px-10 text-base"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
