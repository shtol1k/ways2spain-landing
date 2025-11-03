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
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/api/auth/verify' 
        : '/api/auth/verify';

      const response = await fetch(apiUrl, {
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
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/api/auth/logout' 
        : '/api/auth/logout';

      await fetch(apiUrl, {
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
 */
export function isAuthRequired(): boolean {
  // У production не потрібна авторизація
  if (import.meta.env.PROD) {
    return false;
  }

  // У development/preview потрібна авторизація
  // Перевіряємо через URL (для Vercel preview deployments)
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const isPreviewDeployment = hostname.includes('git-') || hostname.includes('preview');
    const isDevelopment = hostname.includes('localhost') || hostname.includes('127.0.0.1');
    
    return isPreviewDeployment || isDevelopment;
  }

  // За замовчуванням в dev режимі потрібна авторизація
  return import.meta.env.DEV;
}

