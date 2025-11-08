import { Router } from 'express';
import loginHandler from '../../api/auth/login.js';
import logoutHandler from '../../api/auth/logout.js';
import verifyHandler from '../../api/auth/verify.js';
import debugHandler from '../../api/auth/debug.js';

/**
 * Express router, що прокидує локальні маршрути до існуючих
 * серверлес-функцій для авторизації. Це дає змогу працювати
 * з тією ж бізнес-логікою, не запускаючи `vercel dev`.
 */
const router = Router();

// POST /api/auth/login
router.post('/login', async (req, res, next) => {
  try {
    await loginHandler(req, res);
  } catch (error) {
    next(error);
  }
});

// POST /api/auth/logout
router.post('/logout', async (req, res, next) => {
  try {
    await logoutHandler(req, res);
  } catch (error) {
    next(error);
  }
});

// GET /api/auth/verify
router.get('/verify', async (req, res, next) => {
  try {
    await verifyHandler(req, res);
  } catch (error) {
    next(error);
  }
});

// GET /api/auth/debug
router.get('/debug', async (req, res, next) => {
  try {
    await debugHandler(req, res);
  } catch (error) {
    next(error);
  }
});

export { router as authRoute };

