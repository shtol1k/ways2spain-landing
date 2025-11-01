import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator as CalcIcon, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [packageType, setPackageType] = useState("turnkey");
  const [familyMembers, setFamilyMembers] = useState("0");
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  const prices: Record<string, number> = {
    consultation: 49,
    basic: 890,
    turnkey: 1990,
    premium: 2990,
  };

  const additionalPrices: Record<string, number> = {
    statusChange: 790,
    familyMember: 490,
    taxConsultation: 290,
    renewal: 690,
  };

  const calculateTotal = () => {
    let total = prices[packageType];
    
    // Add family members cost
    const familyCount = parseInt(familyMembers);
    if (familyCount > 0) {
      total += familyCount * additionalPrices.familyMember;
    }

    // Add additional services
    additionalServices.forEach((service) => {
      total += additionalPrices[service];
    });

    return total;
  };

  const toggleService = (service: string) => {
    setAdditionalServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-6">
              <CalcIcon className="w-8 h-8 text-accent-foreground" />
            </div>
            <h1 className="mb-4">Калькулятор вартості</h1>
            <p className="text-xl text-muted-foreground">
              Розрахуйте орієнтовну вартість оформлення Digital Nomad Visa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Package Selection */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-elegant">
                <h3 className="text-xl font-bold mb-4">Оберіть пакет послуг</h3>
                <RadioGroup value={packageType} onValueChange={setPackageType}>
                  <div className="space-y-3">
                    {[
                      { value: "consultation", label: "Консультація", price: 49 },
                      { value: "basic", label: "Базовий пакет", price: 890 },
                      { value: "turnkey", label: "Під ключ", price: 1990, recommended: true },
                      { value: "premium", label: "Преміум", price: 2990 },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-smooth cursor-pointer ${
                          packageType === option.value
                            ? "border-secondary bg-secondary/5"
                            : "border-border hover:bg-muted/50"
                        }`}
                        onClick={() => setPackageType(option.value)}
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center space-x-2">
                            <span className="font-semibold">{option.label}</span>
                            {option.recommended && (
                              <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                                Рекомендуємо
                              </span>
                            )}
                          </span>
                          <span className="text-lg font-bold">€{option.price}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Family Members */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-elegant">
                <h3 className="text-xl font-bold mb-4">Кількість членів родини</h3>
                <RadioGroup value={familyMembers} onValueChange={setFamilyMembers}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["0", "1", "2", "3+"].map((count) => (
                      <div
                        key={count}
                        className={`flex items-center justify-center p-4 rounded-lg border transition-smooth cursor-pointer ${
                          familyMembers === count
                            ? "border-secondary bg-secondary/5"
                            : "border-border hover:bg-muted/50"
                        }`}
                        onClick={() => setFamilyMembers(count)}
                      >
                        <RadioGroupItem value={count} id={`family-${count}`} className="sr-only" />
                        <Label
                          htmlFor={`family-${count}`}
                          className="text-center cursor-pointer font-semibold"
                        >
                          {count}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {familyMembers !== "0" && (
                    <p className="text-sm text-muted-foreground mt-3">
                      +€{additionalPrices.familyMember} за кожного члена сім'ї
                    </p>
                  )}
                </RadioGroup>
              </div>

              {/* Additional Services */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-elegant">
                <h3 className="text-xl font-bold mb-4">Додаткові послуги</h3>
                <div className="space-y-3">
                  {[
                    { id: "statusChange", label: "Модифікація статусу", price: 790 },
                    { id: "taxConsultation", label: "Податкова консультація", price: 290 },
                    { id: "renewal", label: "Продовження візи", price: 690 },
                  ].map((service) => (
                    <div
                      key={service.id}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-smooth cursor-pointer ${
                        additionalServices.includes(service.id)
                          ? "border-secondary bg-secondary/5"
                          : "border-border hover:bg-muted/50"
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center ${
                            additionalServices.includes(service.id)
                              ? "bg-secondary border-secondary"
                              : "border-border"
                          }`}
                        >
                          {additionalServices.includes(service.id) && (
                            <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                          )}
                        </div>
                        <span className="font-medium">{service.label}</span>
                      </div>
                      <span className="font-bold">€{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-6 text-primary-foreground sticky top-24">
                <h3 className="text-xl font-bold mb-6">Орієнтовна вартість</h3>

                <div className="space-y-3 mb-6 pb-6 border-b border-primary-foreground/20">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary-foreground/80">Пакет послуг</span>
                    <span className="font-semibold">€{prices[packageType]}</span>
                  </div>
                  {familyMembers !== "0" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/80">
                        Члени родини ({familyMembers})
                      </span>
                      <span className="font-semibold">
                        €{parseInt(familyMembers) * additionalPrices.familyMember}
                      </span>
                    </div>
                  )}
                  {additionalServices.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/80">Додаткові послуги</span>
                      <span className="font-semibold">
                        €
                        {additionalServices.reduce(
                          (sum, service) => sum + additionalPrices[service],
                          0
                        )}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-lg font-semibold">Загальна сума</span>
                  <span className="text-4xl font-bold">€{calculateTotal()}</span>
                </div>

                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="w-full">
                    Замовити послугу
                  </Button>
                </Link>

                <p className="text-xs text-primary-foreground/70 mt-4 text-center">
                  Остаточна ціна може відрізнятися залежно від специфіки вашої ситуації
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
