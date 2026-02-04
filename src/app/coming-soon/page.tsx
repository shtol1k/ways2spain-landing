import { Send } from "lucide-react";

export const metadata = {
    title: "Coming Soon - Ways2Spain",
    description: "Твій шлях до Іспанії — скоро онлайн",
};

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 flex flex-col">
            <header className="py-6 px-6 sm:px-10 lg:px-12">
                <div className="mx-auto flex max-w-5xl items-center justify-between">
                    <p className="text-lg font-semibold tracking-tight uppercase text-slate-800">Ways2Spain</p>
                    <span className="text-sm font-medium text-slate-500">
                        Твій шлях до Іспанії — скоро онлайн
                    </span>
                </div>
            </header>

            <main className="flex flex-1 items-center justify-center px-6 pb-16 pt-10 sm:px-10 lg:px-12">
                <div className="mx-auto max-w-3xl text-center space-y-10">
                    <div className="space-y-5">
                        <img
                            src="/coming-soon.svg"
                            alt="Ілюстрація запуску Ways2Spain"
                            className="mx-auto w-full max-w-lg"
                        />

                        <span className="inline-block rounded-full bg-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
                            Coming soon
                        </span>
                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-slate-900">
                            Працюємо над новим досвідом для твого переїзду в Іспанію
                        </h1>
                        <p className="text-base text-slate-600 sm:text-lg">
                            Наша команда допрацьовує сервіс, щоб ти отримав зручні інструменти, експертні поради та
                            перевірені контакти для релокації.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <p className="text-sm text-slate-500 sm:text-base">
                            Слідкуйте за новинами та оновленнями у нашому каналі:
                        </p>
                        <a
                            href="https://t.me/ways2spain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-lg shadow-slate-900/10 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
                        >
                            <Send className="h-5 w-5" />
                            Наш Telegram-канал
                        </a>
                    </div>
                </div>
            </main>

            <footer className="px-6 pb-8 pt-4 sm:px-10 lg:px-12">
                <div className="mx-auto flex max-w-5xl flex-col gap-2 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Ways2Spain. Всі права захищено.</p>
                </div>
            </footer>
        </div>
    );
}
