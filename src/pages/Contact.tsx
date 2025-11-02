import { useState } from "react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Визначаємо URL: локально використовуємо localhost, на продакшн - відносний шлях
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/api/contact' 
        : '/api/contact';

      const response = await fetch(apiUrl, {
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
          description: "Ми зв'яжемося з вами найближчим часом.",
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
            <h1 className="mb-4">Зв'яжіться з нами</h1>
            <p className="text-xl text-muted-foreground">
              Отримайте безкоштовну консультацію щодо вашого кейсу
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 border border-border shadow-elegant">
                <h2 className="text-2xl font-bold mb-6">Форма зворотного зв'язку</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ім'я *</Label>
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
                      <p className="font-medium">Телеграм (зворотний зв'язок)</p>
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
                    <span>Понеділок - П'ятниця</span>
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

              {/* Quick Response */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-elegant">
                <h3 className="text-lg font-bold mb-2">Швидка відповідь</h3>
                <p className="text-sm text-muted-foreground">
                  Ми відповідаємо на всі запити протягом 24 годин в робочі дні.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
