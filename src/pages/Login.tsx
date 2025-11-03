import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Lock, User, LogIn } from "lucide-react";

/**
 * Сторінка логіну для авторизації в preview/development енвайронментах
 */
const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Перевіряємо чи користувач вже авторизований при завантаженні сторінки
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/api/auth/verify' 
        : '/api/auth/verify';

      const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: 'include', // Важливо для відправки cookies
      });

      const data = await response.json();

      if (data.success && data.authenticated) {
        // Якщо вже авторизований - редіректимо на головну або на redirect URL
        const redirectUrl = searchParams.get('redirect') || '/';
        navigate(redirectUrl, { replace: true });
      }
    } catch (error) {
      // Якщо помилка - просто залишаємо на сторінці логіну
      console.error('Auth check error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Визначаємо URL: локально використовуємо localhost, на продакшн - відносний шлях
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/api/auth/login' 
        : '/api/auth/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Важливо для отримання cookies
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          rememberMe: formData.rememberMe,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Успішна авторизація!",
          description: "Ви успішно увійшли в систему.",
        });

        // Редіректимо на головну або на збережений URL
        const redirectUrl = searchParams.get('redirect') || '/';
        navigate(redirectUrl, { replace: true });
      } else {
        toast({
          title: "Помилка авторизації",
          description: data.error || "Невірний логін або пароль",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Помилка",
        description: "Не вдалося підключитися до сервера. Спробуйте пізніше.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-elegant p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Авторизація</h1>
            <p className="text-sm text-muted-foreground">
              Введіть свої облікові дані для доступу
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Логін</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Введіть логін"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="pl-10"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Введіть пароль"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="pl-10"
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, rememberMe: checked === true }))
                }
                disabled={isSubmitting}
              />
              <Label
                htmlFor="rememberMe"
                className="text-sm font-normal cursor-pointer"
              >
                Запам'ятати мене
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Авторизація...
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Увійти
                </>
              )}
            </Button>
          </form>

          {/* Info */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Ця сторінка доступна тільки в preview та development середовищах
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

