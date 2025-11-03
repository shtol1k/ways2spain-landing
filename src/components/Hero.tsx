import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-spain.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Barcelona cityscape with palm trees at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary text-sm font-semibold">
              Digital Nomad Visa 2025
            </span>
          </div>

          <h1 className="text-white mb-6 animate-fade-in">
            Digital Nomad Visa в Іспанії під ключ
          </h1>

          {/* Development Environment Indicator */}
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-yellow-500/90 backdrop-blur-sm border-2 border-yellow-400 text-black font-bold text-sm shadow-lg">
              🚀 DEVELOPMENT ENVIRONMENT - TEST MODE
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Від консультації до отримання ТІЕ — без плутанини. Легальне життя та робота в Іспанії для віддалених спеціалістів.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Розпочати оформлення
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/calculator">
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
