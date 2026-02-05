import Link from "next/link";
import { Mail, MapPin, Send, Instagram } from "lucide-react";

const CURRENT_YEAR = 2026;

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Ways 2 Spain Logo" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Допомагаємо віддаленим спеціалістам з родинами жити і працювати в Іспанії з Digital Nomad Visa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Email and Phone */}
              <div className="space-y-2">
                <a
                  href="mailto:ways2spain@gmail.com"
                  className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  <span>ways2spain@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <MapPin className="w-4 h-4" />
                  <span>Валенсія, Іспанія</span>
                </div>
              </div>
              
              {/* Right Column - Telegram and Instagram */}
              <div className="space-y-2">
                <a
                  href="https://t.me/+FABp3kLbRt45NzFi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  <Send className="w-4 h-4" />
                  <span>Ways2Spain</span>
                </a>
                <a
                  href="https://instagram.com/ways2spain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@ways2spain</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Навігація</h4>
            <ul className="space-y-2">
              {[
                {path: "/", label: "Головна"},
                {path: "/visa", label: "Про візу"},
                {path: "/services", label: "Послуги"},
                {path: "/about", label: "Про нас"},
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Ресурси</h4>
            <ul className="space-y-2">
              {[
                {path: "/calculator", label: "Калькулятор"},
                {path: "/blog", label: "Блог"},
                {path: "/contact", label: "Контакти"},
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {CURRENT_YEAR} Ways 2 Spain. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
