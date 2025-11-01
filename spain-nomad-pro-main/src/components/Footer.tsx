import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center font-bold text-accent-foreground">
                DN
              </div>
              <span className="text-xl font-bold">Digital Nomad Іспанія</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Допомагаємо віддаленим спеціалістам та родинам легально жити і працювати в Іспанії через Digital Nomad Visa.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@digitalnomad.es"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>info@digitalnomad.es</span>
              </a>
              <a
                href="tel:+34600000000"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>+34 600 000 000</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Навігація</h4>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Головна" },
                { path: "/visa", label: "Про візу" },
                { path: "/services", label: "Послуги" },
                { path: "/about", label: "Про нас" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
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
                { path: "/calculator", label: "Калькулятор" },
                { path: "/blog", label: "Блог" },
                { path: "/contact", label: "Контакти" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
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
          <p>&copy; {new Date().getFullYear()} Digital Nomad Іспанія. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
