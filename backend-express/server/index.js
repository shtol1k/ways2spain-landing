import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import { contactRoute } from './routes/contact.js';
import { authRoute } from './routes/auth.js';
import { checkAuthRequired } from './middleware.js';

// Визначаємо корінь проєкту (бо файл виконується з backend/server)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../');

// Завантажуємо змінні оточення
dotenv.config({ path: path.join(projectRoot, '.env') });
dotenv.config({ path: path.join(projectRoot, '.env.local'), override: true });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
    credentials: true,
  }),
); // Дозволяємо запити з фронтенду
app.use(express.json()); // Для парсингу JSON
app.use(cookieParser()); // Для обробки cookies

// Middleware для перевірки авторизації (тільки для не-API роутів)
app.use((req, res, next) => {
  // Пропускаємо API роути без перевірки авторизації
  if (req.path.startsWith('/api/')) {
    return next();
  }
  return checkAuthRequired(req, res, next);
});

// Роути для API
app.use('/api', contactRoute);
app.use('/api/auth', authRoute);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Запускаємо сервер
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Gmail SMTP configured for: ${process.env.GMAIL_USER || 'Not configured'}`);
});

