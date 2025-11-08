# Local Dev Launcher

Purpose: make sure every agent knows how to стартувати локальні сервери для ways2spain-landing.

## 1. Environment check
- `.env.local` must contain `AUTH_USERNAME` and `AUTH_PASSWORD` (optionally `AUTH_TOKEN`, `AUTH_SECRET`, `GMAIL_*`, etc.).
- Express automatically loads `.env` first, then overrides with `.env.local`, so no additional steps потрібні.

## 2. Clean ports before launch
- Recommended command: `npm run dev:safe`
  - Runs `scripts/ensure-ports.js`.
  - Frees Node processes that listen on ports `8080` (Vite) and `3001` (Express).
  - Warns if the port is occupied by a non-Node process (manual kill required).
- If custom port list is required: `PORTS=3001,8081 npm run dev:clean`.

## 3. Start servers
- `npm run dev:safe` automatically calls `npm run dev:all` after port cleanup.
- `npm run dev:all` runs both:
  - Vite frontend at `http://localhost:8080`
  - Express backend at `http://localhost:3001`

## 4. Usage tips
- Login form expects `/api/auth/*` from Express; they reuse Vercel handlers, so behavior matches production preview.
- If you see `❌ Auth credentials not configured`, double-check `.env.local`.
- To stop servers: send `Ctrl+C` in the terminal (kills both child processes of `concurrently`).

## 5. Troubleshooting
- Port conflict? Use `lsof -i :8080` or `lsof -i :3001`, then `kill <PID>` if the process is not Node.
- Need manual restart? First run `npm run dev:clean`, then `npm run dev:all`.

