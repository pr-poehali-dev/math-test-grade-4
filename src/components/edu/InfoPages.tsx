import { useState } from "react";
import Icon from "@/components/ui/icon";
import { ProgressBar } from "./NavItem";
import { courses } from "./data";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/359dc848-dbf4-4d0b-a7ab-33385e097d96/files/6c8be642-9d1b-4cde-9932-8ea434691543.jpg";

type Page = "home" | "profile" | "progress" | "courses" | "lessons" | "contacts";

export function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="animate-fade-in">
      <div className="relative overflow-hidden rounded-3xl mb-6 min-h-[240px] flex items-end">
        <img src={HERO_IMAGE} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,15%,6%)] via-transparent to-transparent" />
        <div className="relative z-10 p-6 pb-8">
          <div className="inline-block bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-xs text-purple-300 font-body mb-3">
            ✨ Добро пожаловать
          </div>
          <h1 className="font-display text-4xl font-bold text-white text-glow-purple leading-tight mb-2">
            УЧИСЬ<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              БЕЗ ГРАНИЦ
            </span>
          </h1>
          <p className="font-body text-gray-400 text-sm mb-4">Современные курсы и интерактивные квизы</p>
          <button
            onClick={() => setPage("courses")}
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-white font-body font-semibold px-6 py-3 rounded-2xl transition-all duration-300 text-sm"
          >
            Начать обучение →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Курсов", value: "24+", icon: "BookOpen", color: "#a855f7" },
          { label: "Уроков", value: "450+", icon: "Play", color: "#00f5ff" },
          { label: "Студентов", value: "1.2K", icon: "Users", color: "#f72585" },
        ].map((s, i) => (
          <div key={i} className="gradient-border rounded-2xl p-4 text-center">
            <Icon name={s.icon} size={18} style={{ color: s.color }} className="mx-auto mb-1" />
            <div className="font-display text-xl font-bold text-white">{s.value}</div>
            <div className="font-body text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-lg font-semibold text-white">Популярные курсы</h2>
          <button onClick={() => setPage("courses")} className="text-purple-400 text-xs font-body hover:text-cyan-400 transition-colors">
            Все →
          </button>
        </div>
        <div className="space-y-3">
          {courses.slice(0, 3).map((c) => (
            <div
              key={c.id}
              onClick={() => setPage("courses")}
              className="gradient-border rounded-2xl p-4 cursor-pointer card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${c.color}22` }}
                >
                  {c.emoji}
                </div>
                <div className="flex-1">
                  <div className="font-display text-sm font-semibold text-white">{c.title}</div>
                  <div className="font-body text-xs text-gray-500">{c.level} · {c.lessons} уроков</div>
                </div>
                <div className="font-display text-sm font-bold" style={{ color: c.color }}>{c.progress}%</div>
              </div>
              <ProgressBar value={c.progress} color={c.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProfilePage() {
  return (
    <div className="animate-fade-in">
      <div className="gradient-border rounded-3xl p-6 mb-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-3xl mx-auto mb-4 animate-float">
            👨‍🎓
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-1">Александр Петров</h2>
          <p className="font-body text-gray-400 text-sm mb-3">a.petrov@email.com</p>
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-1.5">
            <span className="text-yellow-400">⭐</span>
            <span className="font-body text-sm text-purple-300 font-medium">Уровень 12 · Продвинутый</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { label: "Пройдено курсов", value: "8", icon: "Trophy", color: "#f72585" },
          { label: "Завершено уроков", value: "142", icon: "CheckCircle", color: "#39ff14" },
          { label: "Дней подряд", value: "23", icon: "Flame", color: "#ff6b35" },
          { label: "Набрано очков", value: "4820", icon: "Star", color: "#a855f7" },
        ].map((s, i) => (
          <div key={i} className="gradient-border rounded-2xl p-4">
            <Icon name={s.icon} size={20} style={{ color: s.color }} className="mb-2" />
            <div className="font-display text-2xl font-bold text-white">{s.value}</div>
            <div className="font-body text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="gradient-border rounded-2xl p-5">
        <h3 className="font-display text-base font-semibold text-white mb-4">Достижения</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            { emoji: "🏆", label: "Отличник", active: true },
            { emoji: "🔥", label: "Стрик 7", active: true },
            { emoji: "⚡", label: "Быстрый", active: true },
            { emoji: "🎯", label: "Меткий", active: false },
            { emoji: "🌟", label: "Топ-10", active: false },
            { emoji: "💎", label: "Алмаз", active: false },
            { emoji: "🚀", label: "Ракета", active: true },
            { emoji: "📚", label: "Книжник", active: false },
          ].map((a, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                a.active ? "bg-purple-500/20" : "bg-white/5 opacity-40 grayscale"
              }`}
            >
              <span className="text-2xl">{a.emoji}</span>
              <span className="font-body text-xs text-gray-400 text-center leading-tight">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProgressPage() {
  return (
    <div className="animate-fade-in">
      <div className="gradient-border rounded-3xl p-5 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
        <div className="relative z-10">
          <p className="font-body text-gray-400 text-sm mb-1">Общий прогресс</p>
          <div className="flex items-end gap-2 mb-4">
            <span className="font-display text-5xl font-bold text-white text-glow-cyan">72</span>
            <span className="font-display text-2xl text-cyan-400 mb-1">%</span>
          </div>
          <ProgressBar value={72} color="#00f5ff" />
          <p className="font-body text-xs text-gray-500 mt-2">До следующего уровня: 28%</p>
        </div>
      </div>

      <h3 className="font-display text-lg font-semibold text-white mb-3">По предметам</h3>
      <div className="space-y-4 mb-6">
        {courses.map((c) => (
          <div key={c.id}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-base">{c.emoji}</span>
                <span className="font-body text-sm text-white font-medium">{c.title}</span>
              </div>
              <span className="font-display text-sm font-bold" style={{ color: c.color }}>{c.progress}%</span>
            </div>
            <ProgressBar value={c.progress} color={c.color} />
          </div>
        ))}
      </div>

      <div className="gradient-border rounded-2xl p-5">
        <h3 className="font-display text-base font-semibold text-white mb-4">Активность за неделю</h3>
        <div className="flex items-end gap-2 justify-between h-20">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, i) => {
            const heights = [60, 80, 45, 90, 70, 30, 55];
            return (
              <div key={day} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${heights[i]}%`,
                    background: i === 3
                      ? "linear-gradient(180deg, #a855f7, #00f5ff)"
                      : "rgba(168,85,247,0.3)",
                  }}
                />
                <span className="font-body text-xs text-gray-600">{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ContactsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="animate-fade-in">
      <div className="gradient-border rounded-3xl p-6 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
        <div className="relative z-10 text-center">
          <div className="text-4xl mb-3 animate-float">📬</div>
          <h2 className="font-display text-2xl font-bold text-white mb-2">СВЯЖИСЬ С НАМИ</h2>
          <p className="font-body text-gray-400 text-sm">Ответим в течение 24 часов</p>
        </div>
      </div>

      {sent ? (
        <div className="gradient-border rounded-3xl p-8 text-center animate-scale-in">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="font-display text-xl font-bold text-white mb-2">Сообщение отправлено!</h3>
          <p className="font-body text-gray-400 text-sm">Мы свяжемся с тобой по email</p>
        </div>
      ) : (
        <div className="gradient-border rounded-3xl p-5 mb-6">
          <div className="space-y-4">
            {[
              { key: "name", label: "Имя", placeholder: "Как тебя зовут?", type: "text" },
              { key: "email", label: "Email", placeholder: "твой@email.com", type: "email" },
            ].map((f) => (
              <div key={f.key}>
                <label className="font-body text-xs text-gray-400 mb-1.5 block">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="font-body text-xs text-gray-400 mb-1.5 block">Сообщение</label>
              <textarea
                rows={4}
                placeholder="Расскажи нам..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
              />
            </div>
            <button
              onClick={() => setSent(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-body font-semibold py-4 rounded-2xl transition-all"
            >
              Отправить сообщение
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: "Mail", label: "Email", value: "hello@eduspark.ru", color: "#a855f7" },
          { icon: "Phone", label: "Телефон", value: "+7 (800) 555-0100", color: "#00f5ff" },
          { icon: "MapPin", label: "Адрес", value: "Москва, Россия", color: "#f72585" },
          { icon: "MessageCircle", label: "Telegram", value: "@eduspark", color: "#39ff14" },
        ].map((c, i) => (
          <div key={i} className="gradient-border rounded-2xl p-4">
            <Icon name={c.icon} size={18} style={{ color: c.color }} className="mb-2" />
            <div className="font-body text-xs text-gray-500 mb-0.5">{c.label}</div>
            <div className="font-body text-xs text-gray-300 font-medium leading-tight">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
