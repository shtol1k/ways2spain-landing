# Інструкції для ініціалізації нового React + TypeScript + Vite проекту з повним стеком

## Мета документа
Цей документ містить покрокові інструкції для LLM-код-агента для створення нового проекту з повним стеком технологій, включаючи Storybook для дизайн-системи.

---

## 🎯 Загальні вимоги до проекту

### Технологічний стек:
- **Frontend**: React 18.3+ з TypeScript 5.8+
- **Build Tool**: Vite 5.4+ з React SWC plugin
- **Styling**: Tailwind CSS 3.4+ з PostCSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM v6.30+
- **State Management**: TanStack Query (React Query) v5.83+
- **Forms**: React Hook Form 7.61+ + Zod 3.25+
- **Backend**: Express.js 4.18+ (Node.js)
- **Documentation**: Storybook 7+ для компонентів
- **Deployment**: Vercel конфігурація

### Структура проекту:
```
project-name/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui компоненти
│   │   └── ...          # кастомні компоненти
│   ├── pages/           # сторінки додатку
│   ├── hooks/           # кастомні React хуки
│   ├── lib/             # утиліти (utils.ts)
│   ├── assets/          # зображення, шрифти
│   ├── App.tsx          # головний компонент
│   ├── main.tsx         # точка входу
│   └── index.css        # глобальні стилі
├── server/
│   ├── index.js         # Express сервер
│   └── routes/          # API routes
├── api/                 # Vercel API routes (опціонально)
├── public/              # статичні файли
├── .storybook/          # Storybook конфігурація
├── stories/             # Storybook stories (опціонально)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── eslint.config.js
├── components.json      # shadcn/ui конфігурація
├── vercel.json          # Vercel конфігурація
└── .env.example         # приклад змінних оточення
```

---

## 📋 Покрокова інструкція для код-агента

### ЕТАП 1: Ініціалізація базового Vite + React + TypeScript проекту

**Інструкція для агента:**
```
Створи новий проект з наступними параметрами:

1. Ініціалізуй Vite проект:
   - Використовуй template: react-ts
   - Або створи вручну базову структуру

2. Налаштуй базову структуру папок:
   - src/components/ (створи порожню)
   - src/components/ui/ (створи порожню)
   - src/pages/ (створи порожню)
   - src/hooks/ (створи порожню)
   - src/lib/ (створи порожню)
   - src/assets/ (створи порожню)
   - server/ (створи порожню)
   - server/routes/ (створи порожню)
   - public/ (створюється автоматично)

3. Налаштуй TypeScript конфігурацію:
   
   tsconfig.json:
   {
     "files": [],
     "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       },
       "noImplicitAny": false,
       "noUnusedParameters": false,
       "skipLibCheck": true,
       "allowJs": true,
       "noUnusedLocals": false,
       "strictNullChecks": false
     }
   }

   tsconfig.app.json:
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "isolatedModules": true,
       "moduleDetection": "force",
       "noEmit": true,
       "jsx": "react-jsx",
       "strict": false,
       "noUnusedLocals": false,
       "noUnusedParameters": false,
       "noImplicitAny": false,
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     },
     "include": ["src"]
   }

4. Налаштуй vite.config.ts:
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react-swc";
   import path from "path";
   
   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
     server: {
       host: "0.0.0.0",
       port: 8080,
       strictPort: true,
     },
   });

5. Створи index.html з базовими meta tags:
   - charset="UTF-8"
   - viewport meta tag
   - базовий title
   - <div id="root"></div>

6. Створи src/main.tsx:
   import { createRoot } from "react-dom/client";
   import App from "./App.tsx";
   import "./index.css";
   
   createRoot(document.getElementById("root")!).render(<App />);

7. Створи базовий src/App.tsx:
   export default function App() {
     return <div>Hello World</div>;
   }
```

**Перевірка:**
- ✅ Проект запускається: `npm run dev`
- ✅ TypeScript компілюється без помилок
- ✅ Path aliases працюють (@/)

---

### ЕТАП 2: Налаштування Tailwind CSS

**Інструкція для агента:**
```
Встанови та налаштуй Tailwind CSS:

1. Встанови залежності:
   npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography
   npm install tailwindcss-animate

2. Створи tailwind.config.ts:
   import type { Config } from "tailwindcss";
   
   export default {
     darkMode: ["class"],
     content: [
       "./pages/**/*.{ts,tsx}",
       "./components/**/*.{ts,tsx}",
       "./app/**/*.{ts,tsx}",
       "./src/**/*.{ts,tsx}",
     ],
     prefix: "",
     theme: {
       container: {
         center: true,
         padding: "2rem",
         screens: {
           "2xl": "1400px",
         },
       },
       extend: {
         colors: {
           border: "hsl(var(--border))",
           input: "hsl(var(--input))",
           ring: "hsl(var(--ring))",
           background: "hsl(var(--background))",
           foreground: "hsl(var(--foreground))",
           primary: {
             DEFAULT: "hsl(var(--primary))",
             foreground: "hsl(var(--primary-foreground))",
           },
           secondary: {
             DEFAULT: "hsl(var(--secondary))",
             foreground: "hsl(var(--secondary-foreground))",
           },
           destructive: {
             DEFAULT: "hsl(var(--destructive))",
             foreground: "hsl(var(--destructive-foreground))",
           },
           muted: {
             DEFAULT: "hsl(var(--muted))",
             foreground: "hsl(var(--muted-foreground))",
           },
           accent: {
             DEFAULT: "hsl(var(--accent))",
             foreground: "hsl(var(--accent-foreground))",
           },
           popover: {
             DEFAULT: "hsl(var(--popover))",
             foreground: "hsl(var(--popover-foreground))",
           },
           card: {
             DEFAULT: "hsl(var(--card))",
             foreground: "hsl(var(--card-foreground))",
           },
         },
         borderRadius: {
           lg: "var(--radius)",
           md: "calc(var(--radius) - 2px)",
           sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
           "accordion-down": {
             from: { height: "0" },
             to: { height: "var(--radix-accordion-content-height)" },
           },
           "accordion-up": {
             from: { height: "var(--radix-accordion-content-height)" },
             to: { height: "0" },
           },
         },
         animation: {
           "accordion-down": "accordion-down 0.2s ease-out",
           "accordion-up": "accordion-up 0.2s ease-out",
         },
       },
     },
     plugins: [require("tailwindcss-animate")],
   } satisfies Config;

3. Створи postcss.config.js:
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };

4. Створи src/index.css з Tailwind directives та CSS variables:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   @layer base {
     :root {
       --background: 0 0% 100%;
       --foreground: 220 15% 15%;
       --card: 0 0% 100%;
       --card-foreground: 220 15% 15%;
       --popover: 0 0% 100%;
       --popover-foreground: 220 15% 15%;
       --primary: 220 40% 15%;
       --primary-foreground: 0 0% 98%;
       --secondary: 40 85% 60%;
       --secondary-foreground: 220 40% 15%;
       --muted: 220 15% 96%;
       --muted-foreground: 220 10% 50%;
       --accent: 40 90% 55%;
       --accent-foreground: 220 40% 15%;
       --destructive: 0 84.2% 60.2%;
       --destructive-foreground: 0 0% 98%;
       --border: 220 15% 90%;
       --input: 220 15% 90%;
       --ring: 220 40% 15%;
       --radius: 0.5rem;
     }
     
     .dark {
       --background: 220 40% 8%;
       --foreground: 0 0% 98%;
       --card: 220 35% 12%;
       --card-foreground: 0 0% 98%;
       --popover: 220 35% 12%;
       --popover-foreground: 0 0% 98%;
       --primary: 0 0% 98%;
       --primary-foreground: 220 40% 15%;
       --secondary: 40 85% 60%;
       --secondary-foreground: 220 40% 15%;
       --muted: 220 30% 20%;
       --muted-foreground: 220 10% 65%;
       --accent: 40 90% 55%;
       --accent-foreground: 220 40% 15%;
       --destructive: 0 62.8% 30.6%;
       --destructive-foreground: 0 0% 98%;
       --border: 220 30% 25%;
       --input: 220 30% 25%;
       --ring: 0 0% 98%;
     }
   }
   
   @layer base {
     * {
       @apply border-border;
     }
     body {
       @apply bg-background text-foreground;
     }
   }
```

**Перевірка:**
- ✅ Tailwind стилі застосовуються
- ✅ Dark mode працює через CSS variables
- ✅ Кастомні кольори доступні

---

### ЕТАП 3: Налаштування shadcn/ui

**Інструкція для агента:**
```
Налаштуй shadcn/ui компонентну систему:

1. Встанови базові залежності:
   npm install class-variance-authority clsx tailwind-merge
   npm install lucide-react
   npm install @radix-ui/react-slot

2. Створи components.json:
   {
     "$schema": "https://ui.shadcn.com/schema.json",
     "style": "default",
     "rsc": false,
     "tsx": true,
     "tailwind": {
       "config": "tailwind.config.ts",
       "css": "src/index.css",
       "baseColor": "slate",
       "cssVariables": true,
       "prefix": ""
     },
     "aliases": {
       "components": "@/components",
       "utils": "@/lib/utils",
       "ui": "@/components/ui",
       "lib": "@/lib",
       "hooks": "@/hooks"
     }
   }

3. Створи src/lib/utils.ts:
   import { clsx, type ClassValue } from "clsx";
   import { twMerge } from "tailwind-merge";
   
   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
   }

4. Встанови базові Radix UI компоненти:
   npm install @radix-ui/react-accordion
   npm install @radix-ui/react-alert-dialog
   npm install @radix-ui/react-dialog
   npm install @radix-ui/react-dropdown-menu
   npm install @radix-ui/react-label
   npm install @radix-ui/react-select
   npm install @radix-ui/react-separator
   npm install @radix-ui/react-slot
   npm install @radix-ui/react-tabs
   npm install @radix-ui/react-toast
   npm install @radix-ui/react-tooltip

5. Створи базові UI компоненти (використовуй shadcn CLI або створи вручну):
   - src/components/ui/button.tsx
   - src/components/ui/card.tsx
   - src/components/ui/input.tsx
   - src/components/ui/label.tsx
   - src/components/ui/dialog.tsx
   - src/components/ui/toast.tsx
   - src/components/ui/toaster.tsx
   - src/components/ui/use-toast.ts
```

**Перевірка:**
- ✅ Компоненти імпортуються через @/components/ui
- ✅ cn() функція працює для об'єднання класів
- ✅ Базові компоненти рендеряться коректно

---

### ЕТАП 4: Налаштування React Router

**Інструкція для агента:**
```
Налаштуй маршрутизацію:

1. Встанови react-router-dom:
   npm install react-router-dom

2. Онови src/App.tsx:
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import Layout from "./pages/Layout";
   import Home from "./pages/Home";
   import NotFound from "./pages/NotFound";
   
   const App = () => (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
         </Route>
         <Route path="*" element={<NotFound />} />
       </Routes>
     </BrowserRouter>
   );
   
   export default App;

3. Створи src/pages/Layout.tsx:
   import { Outlet } from "react-router-dom";
   
   export default function Layout() {
     return (
       <div>
         {/* Тут буде Navbar */}
         <main>
           <Outlet />
         </main>
         {/* Тут буде Footer */}
       </div>
     );
   }

4. Створи src/pages/Home.tsx:
   export default function Home() {
     return <div>Home Page</div>;
   }

5. Створи src/pages/NotFound.tsx:
   export default function NotFound() {
     return <div>404 - Page Not Found</div>;
   }

6. Створи src/components/ErrorBoundary.tsx:
   import { Component, ReactNode } from "react";
   
   interface Props {
     children: ReactNode;
   }
   
   interface State {
     hasError: boolean;
   }
   
   export default class ErrorBoundary extends Component<Props, State> {
     state = { hasError: false };
     
     static getDerivedStateFromError() {
       return { hasError: true };
     }
     
     render() {
       if (this.state.hasError) {
         return <div>Something went wrong</div>;
       }
       return this.props.children;
     }
   }
```

**Перевірка:**
- ✅ Маршрути працюють
- ✅ Навігація між сторінками функціонує
- ✅ ErrorBoundary обробляє помилки

---

### ЕТАП 5: Налаштування TanStack Query (React Query)

**Інструкція для агента:**
```
Налаштуй React Query:

1. Встанови @tanstack/react-query:
   npm install @tanstack/react-query

2. Онови src/App.tsx:
   import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
   
   const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         staleTime: 5 * 60 * 1000, // 5 хвилин
         cacheTime: 10 * 60 * 1000, // 10 хвилин
         retry: 3,
       },
     },
   });
   
   const App = () => (
     <QueryClientProvider client={queryClient}>
       {/* ... інші провайдери та роутинг ... */}
     </QueryClientProvider>
   );

3. Створи приклад хука src/hooks/use-fetch-data.ts:
   import { useQuery } from "@tanstack/react-query";
   
   export function useFetchData() {
     return useQuery({
       queryKey: ["data"],
       queryFn: async () => {
         const response = await fetch("/api/data");
         return response.json();
       },
     });
   }
```

**Перевірка:**
- ✅ QueryClientProvider працює
- ✅ Хуки useQuery доступні

---

### ЕТАП 6: Налаштування React Hook Form + Zod

**Інструкція для агента:**
```
Налаштуй систему валідації форм:

1. Встанови залежності:
   npm install react-hook-form zod @hookform/resolvers

2. Створи приклад форми src/components/ContactForm.tsx:
   import { useForm } from "react-hook-form";
   import { zodResolver } from "@hookform/resolvers/zod";
   import * as z from "zod";
   import { Button } from "@/components/ui/button";
   import { Input } from "@/components/ui/input";
   import { Label } from "@/components/ui/label";
   
   const formSchema = z.object({
     name: z.string().min(2, "Name must be at least 2 characters"),
     email: z.string().email("Invalid email address"),
   });
   
   type FormData = z.infer<typeof formSchema>;
   
   export function ContactForm() {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<FormData>({
       resolver: zodResolver(formSchema),
     });
     
     const onSubmit = (data: FormData) => {
       console.log(data);
     };
     
     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <div>
           <Label htmlFor="name">Name</Label>
           <Input id="name" {...register("name")} />
           {errors.name && <p>{errors.name.message}</p>}
         </div>
         <div>
           <Label htmlFor="email">Email</Label>
           <Input id="email" type="email" {...register("email")} />
           {errors.email && <p>{errors.email.message}</p>}
         </div>
         <Button type="submit">Submit</Button>
       </form>
     );
   }
```

**Перевірка:**
- ✅ Форми валідуються через Zod
- ✅ Помилки відображаються коректно

---

### ЕТАП 7: Налаштування Express.js Backend

**Інструкція для агента:**
```
Створи Express backend:

1. Встанови залежності:
   npm install express cors dotenv nodemailer

2. Створи server/index.js:
   import express from 'express';
   import cors from 'cors';
   import dotenv from 'dotenv';
   import { contactRoute } from './routes/contact.js';
   
   dotenv.config();
   
   const app = express();
   const PORT = process.env.PORT || 3001;
   
   app.use(cors());
   app.use(express.json());
   
   app.use('/api', contactRoute);
   
   app.get('/health', (req, res) => {
     res.json({ status: 'ok', message: 'Server is running' });
   });
   
   app.listen(PORT, () => {
     console.log(`🚀 Server is running on http://localhost:${PORT}`);
   });

3. Створи server/routes/contact.js:
   import express from 'express';
   import nodemailer from 'nodemailer';
   
   const router = express.Router();
   
   router.post('/contact', async (req, res) => {
     try {
       const { name, email, message } = req.body;
       
       // Налаштуй Nodemailer (приклад)
       const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: process.env.GMAIL_USER,
           pass: process.env.GMAIL_PASS,
         },
       });
       
       await transporter.sendMail({
         from: email,
         to: process.env.GMAIL_USER,
         subject: `Contact from ${name}`,
         text: message,
       });
       
       res.json({ success: true });
     } catch (error) {
       res.status(500).json({ error: 'Failed to send email' });
     }
   });
   
   export { router as contactRoute };

4. Створи .env.example:
   PORT=3001
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password

5. Онови package.json зі скриптами:
   "scripts": {
     "dev": "vite --strictPort",
     "dev:frontend": "vite --strictPort",
     "dev:server": "node server/index.js",
     "dev:all": "concurrently \"npm run dev:frontend\" \"npm run dev:server\"",
     "build": "vite build",
     "preview": "vite preview"
   }

6. Встанови concurrently:
   npm install -D concurrently
```

**Перевірка:**
- ✅ Express сервер запускається
- ✅ API endpoints працюють
- ✅ CORS налаштовано правильно

---

### ЕТАП 8: Налаштування Storybook

**Інструкція для агента:**
```
Встанови та налаштуй Storybook:

1. Ініціалізуй Storybook:
   npx storybook@latest init
   
   Вибері:
   - Vite як builder (НЕ Webpack)
   - TypeScript
   - React
   - Створи stories в папці stories/

2. Налаштуй .storybook/main.ts (або main.js):
   import type { StorybookConfig } from '@storybook/react-vite';
   
   const config: StorybookConfig = {
     stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
     addons: [
       '@storybook/addon-links',
       '@storybook/addon-essentials',
       '@storybook/addon-interactions',
       '@storybook/addon-controls',
       '@storybook/addon-viewport',
     ],
     framework: {
       name: '@storybook/react-vite',
       options: {},
     },
     core: {
       builder: '@storybook/builder-vite',
     },
   };
   
   export default config;

3. Налаштуй .storybook/preview.ts (або preview.js):
   import type { Preview } from '@storybook/react';
   import '../src/index.css'; // Імпортуй Tailwind CSS
   
   const preview: Preview = {
     parameters: {
       actions: { argTypesRegex: "^on[A-Z].*" },
       controls: {
         matchers: {
           color: /(background|color)$/i,
           date: /Date$/,
         },
       },
     },
     decorators: [
       (Story) => (
         <div className="p-4">
           <Story />
         </div>
       ),
     ],
   };
   
   export default preview;

4. Створи приклад stories для Button компонента:
   src/components/ui/button.stories.tsx:
   
   import type { Meta, StoryObj } from '@storybook/react';
   import { Button } from './button';
   
   const meta: Meta<typeof Button> = {
     title: 'UI/Button',
     component: Button,
     tags: ['autodocs'],
     argTypes: {
       variant: {
         control: 'select',
         options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
       },
       size: {
         control: 'select',
         options: ['default', 'sm', 'lg', 'icon'],
       },
     },
   };
   
   export default meta;
   type Story = StoryObj<typeof Button>;
   
   export const Default: Story = {
     args: {
       children: 'Button',
     },
   };
   
   export const Destructive: Story = {
     args: {
       variant: 'destructive',
       children: 'Delete',
     },
   };
   
   export const Outline: Story = {
     args: {
       variant: 'outline',
       children: 'Outline',
     },
   };

5. Створи приклад stories для Card компонента:
   src/components/ui/card.stories.tsx:
   
   import type { Meta, StoryObj } from '@storybook/react';
   import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
   
   const meta: Meta<typeof Card> = {
     title: 'UI/Card',
     component: Card,
     tags: ['autodocs'],
   };
   
   export default meta;
   type Story = StoryObj<typeof Card>;
   
   export const Default: Story = {
     render: () => (
       <Card>
         <CardHeader>
           <CardTitle>Card Title</CardTitle>
           <CardDescription>Card description</CardDescription>
         </CardHeader>
         <CardContent>
           <p>Card content goes here</p>
         </CardContent>
       </Card>
     ),
   };

6. Онови package.json зі скриптом:
   "scripts": {
     "storybook": "storybook dev -p 6006",
     "build-storybook": "storybook build"
   }

7. Створи .storybook/vite.config.ts для інтеграції з Tailwind:
   import { mergeConfig } from 'vite';
   import viteConfig from '../vite.config';
   
   export default mergeConfig(viteConfig, {
     // Storybook-specific Vite config
   });
```

**Перевірка:**
- ✅ Storybook запускається: `npm run storybook`
- ✅ Stories відображаються
- ✅ Tailwind стилі працюють
- ✅ Controls та інші addons функціонують

---

### ЕТАП 9: Налаштування ESLint та TypeScript

**Інструкція для агента:**
```
Налаштуй якість коду:

1. Встанови ESLint залежності:
   npm install -D eslint @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint

2. Створи eslint.config.js:
   import js from "@eslint/js";
   import globals from "globals";
   import reactHooks from "eslint-plugin-react-hooks";
   import reactRefresh from "eslint-plugin-react-refresh";
   import tseslint from "typescript-eslint";
   
   export default tseslint.config(
     { ignores: ["dist", ".storybook"] },
     {
       extends: [js.configs.recommended, ...tseslint.configs.recommended],
       files: ["**/*.{ts,tsx}"],
       languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
       },
       plugins: {
         "react-hooks": reactHooks,
         "react-refresh": reactRefresh,
       },
       rules: {
         ...reactHooks.configs.recommended.rules,
         "react-refresh/only-export-components": [
           "warn",
           { allowConstantExport: true },
         ],
         "@typescript-eslint/no-unused-vars": "off",
       },
     },
   );

3. Онови package.json зі скриптом:
   "scripts": {
     "lint": "eslint ."
   }
```

**Перевірка:**
- ✅ ESLint працює без помилок
- ✅ TypeScript компілюється

---

### ЕТАП 10: Налаштування додаткових утиліт

**Інструкція для агента:**
```
Додай корисні утиліти:

1. Встанови залежності:
   npm install next-themes date-fns sonner

2. Створи ThemeProvider wrapper:
   src/components/ThemeProvider.tsx:
   
   import { ThemeProvider as NextThemeProvider } from "next-themes";
   
   export function ThemeProvider({ children }: { children: React.ReactNode }) {
     return (
       <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
         {children}
       </NextThemeProvider>
     );
   }

3. Онови src/App.tsx:
   import { ThemeProvider } from "@/components/ThemeProvider";
   
   const App = () => (
     <ThemeProvider>
       {/* ... інші провайдери ... */}
     </ThemeProvider>
   );

4. Створи хук src/hooks/use-mobile.ts:
   import { useEffect, useState } from "react";
   
   export function useMobile() {
     const [isMobile, setIsMobile] = useState(false);
     
     useEffect(() => {
       const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
       };
       
       checkMobile();
       window.addEventListener("resize", checkMobile);
       
       return () => window.removeEventListener("resize", checkMobile);
     }, []);
     
     return isMobile;
   }
```

**Перевірка:**
- ✅ Dark mode перемикається
- ✅ Мобільний хук працює

---

### ЕТАП 11: Налаштування Vercel конфігурації

**Інструкція для агента:**
```
Підготуй до деплою:

1. Створи vercel.json:
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "rewrites": [
       {
         "source": "/((?!api/|assets/|_next/|.*\\..*).*)",
         "destination": "/index.html"
       }
     ],
     "headers": [
       {
         "source": "/index.html",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "no-cache, no-store, must-revalidate"
           }
         ]
       },
       {
         "source": "/assets/(.*)",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "public, max-age=31536000, immutable"
           }
         ]
       }
     ]
   }

2. Створи .gitignore:
   node_modules
   dist
   .env
   .env.local
   .DS_Store
   *.log
   .storybook-static
```

**Перевірка:**
- ✅ vercel.json коректний
- ✅ .gitignore налаштовано

---

## ✅ Фінальна перевірка проекту

### Чеклист для агента:

1. **Базовий проект:**
   - [ ] Vite запускається: `npm run dev`
   - [ ] TypeScript компілюється без помилок
   - [ ] Path aliases працюють (@/)

2. **Styling:**
   - [ ] Tailwind CSS працює
   - [ ] Dark mode перемикається
   - [ ] CSS variables застосовуються

3. **UI Components:**
   - [ ] shadcn/ui компоненти імпортуються
   - [ ] cn() функція працює
   - [ ] Базові компоненти рендеряться

4. **Routing:**
   - [ ] React Router працює
   - [ ] Навігація між сторінками функціонує
   - [ ] ErrorBoundary обробляє помилки

5. **State Management:**
   - [ ] React Query налаштовано
   - [ ] QueryClientProvider працює

6. **Forms:**
   - [ ] React Hook Form працює
   - [ ] Zod валідація працює

7. **Backend:**
   - [ ] Express сервер запускається
   - [ ] API endpoints працюють
   - [ ] CORS налаштовано

8. **Storybook:**
   - [ ] Storybook запускається: `npm run storybook`
   - [ ] Stories відображаються
   - [ ] Tailwind стилі працюють в Storybook

9. **Code Quality:**
   - [ ] ESLint працює
   - [ ] TypeScript типізація коректна

10. **Deployment:**
    - [ ] vercel.json налаштовано
    - [ ] .gitignore коректний

---

## 🚀 Команди для запуску

### Розробка:
```bash
# Тільки frontend
npm run dev

# Тільки backend
npm run dev:server

# Frontend + Backend одночасно
npm run dev:all

# Storybook
npm run storybook
```

### Білд:
```bash
# Production build
npm run build

# Preview production build
npm run preview

# Build Storybook
npm run build-storybook
```

### Якість коду:
```bash
# Запустити ESLint
npm run lint
```

---

## 📝 Додаткові рекомендації

1. **Після створення 5-7 компонентів:**
   - Додай stories для всіх компонентів в Storybook
   - Документуй props та приклади використання

2. **Для дизайн-системи:**
   - Створи категорії в Storybook: Foundations, Components, Patterns
   - Додай документацію до кожного компонента
   - Використовуй Controls addon для інтерактивного тестування

3. **Для масштабування:**
   - Додай database (PostgreSQL + Prisma) коли буде потрібно
   - Налаштуй автентифікацію (NextAuth.js або Auth0)
   - Додай real-time функціонал (Socket.io) якщо потрібно

---

## 🎯 Висновок

Цей документ містить повну інструкцію для створення нового проекту з сучасним стеком технологій. Виконуй етапи послідовно, перевіряючи кожен крок перед переходом до наступного.

**Час на налаштування:** ~2-4 години для повного стеку

**Результат:** Повністю налаштований проект, готовий до розробки дизайн-системи та функціоналу.

