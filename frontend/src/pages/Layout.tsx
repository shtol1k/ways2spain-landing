import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth, isAuthRequired } from "@/hooks/use-auth";

const Layout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();
  const authRequired = isAuthRequired();

  useEffect(() => {
    // Перевіряємо авторизацію тільки якщо вона потрібна
    if (authRequired && !isLoading) {
      if (isAuthenticated === false) {
        // Якщо не авторизований - редіректимо на логін
        navigate('/login', { replace: true });
      }
    }
  }, [isAuthenticated, isLoading, authRequired, navigate]);

  // Показуємо loading стан поки перевіряємо авторизацію
  if (authRequired && isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Якщо авторизація потрібна і не пройдена - не показуємо контент
  if (authRequired && isAuthenticated === false) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
