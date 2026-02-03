import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SiteNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center gradient-subtle">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">Сторінку не знайдено</p>
        <Link href="/">
          <Button variant="hero" size="lg">
            Повернутися на головну
          </Button>
        </Link>
      </div>
    </div>
  );
}
