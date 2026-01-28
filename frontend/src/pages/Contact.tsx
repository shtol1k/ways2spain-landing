import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    situation: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calendarScriptLoaded, setCalendarScriptLoaded] = useState(false);
  const calendarButtonRef = useRef<HTMLDivElement>(null);

  // Load Google Calendar script and styles on component mount
  useEffect(() => {
    if (!calendarScriptLoaded) {
      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      document.head.appendChild(link);

      // Load script
      const script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      script.onload = () => {
        setCalendarScriptLoaded(true);
      };
      document.body.appendChild(script);
    }
  }, [calendarScriptLoaded]);

  // Initialize Google Calendar button
  useEffect(() => {
    if (calendarScriptLoaded && calendarButtonRef.current) {
      const calendarButton = (window as any).calendar?.schedulingButton;
      if (calendarButton) {
        calendarButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3jTGctAysecOcYEy5V3MKyBfqGNW1UlWUBxuNtv5XJrgNBSre5zhTu18d5jw8-TMYeB6BCl9uz?gv=true',
          color: '#F0B543',
          label: 'Записатись на безкоштовну консультацію',
          target: calendarButtonRef.current,
        });
      }
    }
  }, [calendarScriptLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Визначаємо URL: локально використовуємо localhost, на продакшн - відносний шлях
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Повідомлення надіслано!",
          description: "Ми зв\'яжемося з вами найближчим часом.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          package: "",
          situation: "",
          message: "",
        });
      } else {
        throw new Error(data.error || 'Помилка при відправці');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Помилка",
        description: error instanceof Error 
          ? error.message 
          : "Не вдалося надіслати повідомлення. Спробуйте пізніше.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-4">Зв\'яжіться з нами</h1>
            <p className="text-xl text-muted-foreground">
              Отримайте безкоштовну консультацію щодо вашого кейсу
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Free Consultation Block */}
              <div className="bg-gradient-to-r from-orange-500/10 to-yellow-400/10 rounded-xl p-6 border border-border shadow-elegant">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">Безкоштовна консультація</h2>
                  <p className="text-muted-foreground mb-4">
                    Запишіться на безкоштовну консультацію та отримайте персональні рекомендації щодо вашого кейсу переїзду до Іспанії.
                  </p>
                  {/* Google Calendar Button Container */}
                  <div 
                    id="calendar-button-container"
                    ref={calendarButtonRef}
                    className="w-fit"
                  />
                  <style>{`
                    /* Custom styles for Google Calendar button to match our design */
                    #calendar-button-container .schedule-meeting,
                    #calendar-button-container .schedule-meeting-button {
                      background: #F0B543 !important;
                      color: white !important;
                      border: none !important;
                      border-radius: 0.5rem !important;
                      padding: 0.75rem 1.5rem !important;
                      font-weight: 500 !important;
                      font-size: 0.875rem !important;
                      font-family: system-ui, -apple-system, sans-serif !important;
                      transition: all 0.2s ease !important;
                      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
                    }
                    #calendar-button-container .schedule-meeting:hover,
                    #calendar-button-container .schedule-meeting-button:hover {
                      transform: translateY(-1px) !important;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15) !important;
                      filter: brightness(1.1) !important;
                    }
                    #calendar-button-container .schedule-meeting:active,
                    #calendar-button-container .schedule-meeting-button:active {
                      transform: translateY(0) !important;
                    }
                  `}</style>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="bg-card rounded-xl p-8 border border-border shadow-elegant">
                <h2 className="text-2xl font-bold mb-6">Форма зворотного зв\'язку</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ім\'я *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Іван Петренко"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ivan@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+32 00 000 0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package">Послуга</Label>
                      <Select
                        value={formData.package}
                        onValueChange={(value) =>
                          setFormData({ ...formData, package: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Оберіть послугу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Консультація</SelectItem>
                          <SelectItem value="basic">Лайт</SelectItem>
                          <SelectItem value="turnkey">Оптимум</SelectItem>
                          <SelectItem value="premium">Все включено</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="situation">Ваш кейс</Label>
                    <Select
                      value={formData.situation}
                      onValueChange={(value) =>
                        setFormData({ ...formData, situation: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Оберіть варіант" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">Планую переїзд</SelectItem>
                        <SelectItem value="in-spain">Вже в Іспанії</SelectItem>
                        <SelectItem value="temporary">Маю тимчасовий захист</SelectItem>
                        <SelectItem value="renewal">Потрібно продовження</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Повідомлення *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Розкажіть детальніше про ваш кейс..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Відправка...' : 'Надіслати повідомлення'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Details */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-elegant">
                <h3 className="text-xl font-bold mb-6">Контактна інформація</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:ways2spain@gmail.com"
                        className="text-muted-foreground hover:text-secondary transition-smooth"
                      >
                        ways2spain@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <a
                        href="tel:+34627073891"
                        className="text-muted-foreground hover:text-secondary transition-smooth"
                      >
                        +34 62 707 3891
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Send className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Телеграм (зворотний зв\'язок)</p>
                      <a
                        href="/"
                        className="text-muted-foreground hover:text-secondary transition-smooth"
                      >
                        @w2s
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Send className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Телеграм (канал новин)</p>
                      <a
                        href="https://t.me/+FABp3kLbRt45NzFi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-smooth"
                      >
                        Ways2Spain
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Instagram className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <a
                        href="/"
                        className="text-muted-foreground hover:text-secondary transition-smooth"
                      >
                        @ways2spain
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Адреса</p>
                      <p className="text-muted-foreground">
                        Валенсія, Іспанія
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Графік роботи</h3>
                <div className="space-y-2 text-primary-foreground/90">
                  <div className="flex justify-between">
                    <span>Понеділок - П\'ятниця</span>
                    <span className="font-semibold">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Субота</span>
                    <span className="font-semibold">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Неділя</span>
                    <span className="font-semibold">Вихідний</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
