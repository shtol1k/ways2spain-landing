export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          🇪🇸 Ways2Spain - Next.js Migration
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Next.js сервер успішно запущено!
        </p>
        <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">✅ Phase 2 Progress</h2>
          <ul className="text-left space-y-2">
            <li>✅ Next.js dependencies installed</li>
            <li>✅ Directory structure created</li>
            <li>✅ TailwindCSS configuration copied</li>
            <li>✅ next.config.js created</li>
            <li>✅ Root layout created</li>
            <li>⏳ Testing dev server...</li>
          </ul>
        </div>
        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            Наступні кроки: міграція Navbar, Footer та Hero компонентів
          </p>
        </div>
      </div>
    </div>
  )
}
