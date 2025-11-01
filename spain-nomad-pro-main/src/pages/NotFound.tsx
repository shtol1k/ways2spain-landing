import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-subtle">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">Сторінку не знайдено</p>
        <a href="/" className="inline-block">
          <Button variant="hero" size="lg">
            Повернутися на головну
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
