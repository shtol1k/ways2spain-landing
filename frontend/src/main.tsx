import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { isAuthRequired } from './hooks/use-auth'

/**
 * Перевіряємо чи потрібна авторизація для поточного середовища
 * Якщо потрібна - перенаправляємо на сторінку логіну
 */
const checkAuthAndRender = () => {
  // Якщо потрібна авторизація і ми не на сторінці логіну - перенаправляємо
  if (isAuthRequired() && !window.location.pathname.includes('/login')) {
    // Зберігаємо поточний URL для редіректу після логіну
    const currentPath = window.location.pathname + window.location.search
    window.location.href = `/login?redirect=${encodeURIComponent(currentPath)}`
    return
  }

  // Якщо авторизація не потрібна і ми на сторінці логіну - перенаправляємо на головну
  if (!isAuthRequired() && window.location.pathname.includes('/login')) {
    window.location.href = '/'
    return
  }

  // В інших випадках - рендеримо додаток
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

checkAuthAndRender()
