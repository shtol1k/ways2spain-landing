import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { contactRoute } from './routes/contact.js';

// Завантажуємо змінні оточення з .env файлу
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Дозволяємо запити з фронтенду
app.use(express.json()); // Для парсингу JSON

// Роут для контактної форми
app.use('/api', contactRoute);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Запускаємо сервер
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Gmail SMTP configured for: ${process.env.GMAIL_USER || 'Not configured'}`);
});

