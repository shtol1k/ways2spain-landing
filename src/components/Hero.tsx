import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-spain.jpg"
          alt="Barcelona cityscape with palm trees at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 animate-fade-in">
            Digital Nomad Visa в Іспанії під ключ
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Від консультації до отримання ТІЕ — без плутанини. Легальне життя та робота в Іспанії для віддалених спеціалістів
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Link href="/contact">
              <Button variant="hero" size="xl">
                Розпочати оформлення
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/calculator">
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Розрахувати вартість
              </Button>
            </Link>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap lg:flex-nowrap gap-6 animate-fade-in">
            {[
              "Надійна альтернатива тимчасовому захисту",
              "Повний супровід процесу",
              "Економія часу та нервів",
            ].map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-lg flex-shrink-0 ${
                  index === 0 ? "whitespace-nowrap" : ""
                }`}
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
