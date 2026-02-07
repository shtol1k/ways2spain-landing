import type { Metadata } from "next";
import CalculatorContent from "./CalculatorContent";

// SEO Metadata
export const metadata: Metadata = {
  title: "Калькулятор вартості - Ways 2 Spain | Розрахунок Digital Nomad Visa",
  description: "Безкоштовний калькулятор вартості оформлення Digital Nomad Visa в Іспанії. Пакети послуг, додаткові опції, легалізація родини.",
  keywords: ["калькулятор", "ціна", "вартість", "Digital Nomad Visa", "розрахунок", "послуги"],
  openGraph: {
    title: "Калькулятор вартості - Ways 2 Spain",
    description: "Розрахуйте орієнтовну вартість оформлення Digital Nomad Visa",
    url: "https://ways2spain.com/calculator",
    siteName: "Ways 2 Spain",
    locale: "uk_UA",
    type: "website",
  },
  alternates: {
    canonical: "https://ways2spain.com/calculator",
  },
};

export default function CalculatorPage() {
  return <CalculatorContent />;
}
