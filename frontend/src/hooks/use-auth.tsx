import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Hook для перевірки авторизації та захисту маршрутів на клієнті
 * Використовується як додатковий захист, якщо middleware не спрацює
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify', {
        method: 'GET',
        credentials: 'include',
      });

      const data = await response.json();
      setIsAuthenticated(data.success && data.authenticated);
    } catch (error) {
      console.error('Auth check error:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      setIsAuthenticated(false);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return {
    isAuthenticated,
    isLoading,
    checkAuth,
    logout,
  };
}

/**
 * Перевіряє чи потрібна авторизація для поточного енвайронменту
 * Авторизація потрібна тільки в preview/development, не в production
 * 
 * ВАЖЛИВО: Перевірка через hostname має бути ПЕРШОЮ,
 * бо import.meta.env.PROD може бути true на Vercel навіть для preview
 */
export function isAuthRequired(): boolean {
  // 🔒 TEMPORARILY DISABLED FOR LOCAL DEVELOPMENT
  // Авторизацію вимкнено для розробки Next.js версії
  // Якщо потрібно увімкнути - зміни false на true нижче
  const AUTH_DISABLED = true;

  if (AUTH_DISABLED && typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1');
    
    if (isLocalhost) {
      console.log('[Auth] ⚠️ Authorization DISABLED for localhost development');
      return false;
    }
  }

  // Перевіряємо через hostname (для Vercel preview deployments)
  // Це має бути ПЕРШОЮ перевіркою, бо import.meta.env може бути некоректним
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;

    // Production domains - не потрібна авторизація
    const isMainDomain = hostname === 'ways2spain.com' || hostname === 'www.ways2spain.com';
    if (isMainDomain) {
      return false;
    }

    // Preview/development domains - потрібна авторизація
    // ВАЖЛИВО: має відповідати логіці в middleware.ts
    const isPreviewDeployment =
      hostname.includes('git-') ||
      hostname.includes('preview') ||
      hostname.includes('develop') || // develop.ways2spain.com
      hostname.includes('staging') ||
      hostname.includes('dev');
    const isDevelopment = hostname.includes('localhost') || hostname.includes('127.0.0.1');

    if (isPreviewDeployment || isDevelopment) {
      return true;
    }
  }

  // Якщо не можемо визначити через hostname - перевіряємо env
  // У production не потрібна авторизація
  if (import.meta.env.PROD) {
    return false;
  }

  // За замовчуванням в dev режимі потрібна авторизація
  return import.meta.env.DEV;
}

