const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Відгуки клієнтів</h2>
          <p className="text-xl text-muted-foreground">
            Що кажуть про нас люди, які вже отримали Digital Nomad Visa
          </p>
        </div>

        {/* Placeholder - Dynamic testimonials coming in Phase 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-card rounded-xl p-8 shadow-elegant border border-border"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{item}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Клієнт {item}</h4>
                  <p className="text-sm text-muted-foreground">Digital Nomad</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Відгук буде додано пізніше після інтеграції з Payload CMS..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
