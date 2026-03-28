import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "profile" | "progress" | "courses" | "lessons" | "contacts";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/359dc848-dbf4-4d0b-a7ab-33385e097d96/files/6c8be642-9d1b-4cde-9932-8ea434691543.jpg";
const COURSES_IMAGE = "https://cdn.poehali.dev/projects/359dc848-dbf4-4d0b-a7ab-33385e097d96/files/232f0038-8b5d-4860-a005-af52cbd4204c.jpg";

const courses = [
  { id: 1, title: "Математика", level: "Базовый", lessons: 24, progress: 65, color: "#a855f7", emoji: "🧮" },
  { id: 2, title: "Физика", level: "Средний", lessons: 18, progress: 40, color: "#00f5ff", emoji: "⚛️" },
  { id: 3, title: "История", level: "Базовый", lessons: 30, progress: 80, color: "#f72585", emoji: "📜" },
  { id: 4, title: "Программирование", level: "Продвинутый", lessons: 42, progress: 20, color: "#39ff14", emoji: "💻" },
  { id: 5, title: "Английский", level: "Средний", lessons: 36, progress: 55, color: "#ff6b35", emoji: "🌍" },
  { id: 6, title: "Биология", level: "Базовый", lessons: 22, progress: 90, color: "#a855f7", emoji: "🌱" },
];

const lessons = [
  { id: 1, course: "Математика", title: "Производные функций", duration: "45 мин", done: true, emoji: "🧮" },
  { id: 2, course: "Физика", title: "Законы Ньютона", duration: "30 мин", done: true, emoji: "⚛️" },
  { id: 3, course: "Программирование", title: "React хуки", duration: "60 мин", done: false, emoji: "💻" },
  { id: 4, course: "Английский", title: "Past Perfect Tense", duration: "25 мин", done: false, emoji: "🌍" },
  { id: 5, course: "История", title: "Первая мировая война", duration: "40 мин", done: true, emoji: "📜" },
];

const quizQuestions = [
  {
    question: "Чему равна производная функции f(x) = x²?",
    options: ["x", "2x", "x²", "2"],
    correct: 1,
  },
  {
    question: "Какой закон описывает связь силы, массы и ускорения?",
    options: ["Закон всемирного тяготения", "Первый закон Ньютона", "Второй закон Ньютона", "Закон Архимеда"],
    correct: 2,
  },
  {
    question: "В каком году началась Первая мировая война?",
    options: ["1912", "1914", "1916", "1918"],
    correct: 1,
  },
];

function NavItem({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
        active
          ? "bg-purple-500/20 text-purple-400 glow-purple"
          : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
      }`}
    >
      <Icon name={icon as unknown as Parameters<typeof Icon>[0]["name"]} size={20} />
      <span className="text-xs font-body font-medium">{label}</span>
    </button>
  );
}

function ProgressBar({ value, color = "#a855f7" }: { value: number; color?: string }) {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}, #00f5ff)` }}
      />
    </div>
  );
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
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

function ProfilePage() {
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

function ProgressPage() {
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

function CoursesPage({ setPage }: { setPage: (p: Page) => void }) {
  const [filter, setFilter] = useState("all");
  const filters = [
    { id: "all", label: "Все" },
    { id: "base", label: "Базовый" },
    { id: "mid", label: "Средний" },
    { id: "adv", label: "Продвинутый" },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <img src={COURSES_IMAGE} alt="Courses" className="w-full h-36 object-cover rounded-2xl opacity-60" />
      </div>

      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-sm font-medium transition-all ${
              filter === f.id
                ? "bg-purple-500 text-white"
                : "bg-white/10 text-gray-400 hover:bg-white/15"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {courses.map((c) => (
          <div
            key={c.id}
            onClick={() => setPage("lessons")}
            className="gradient-border rounded-2xl p-4 cursor-pointer card-hover"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
              style={{ background: `${c.color}22` }}
            >
              {c.emoji}
            </div>
            <h3 className="font-display text-sm font-semibold text-white mb-1">{c.title}</h3>
            <p className="font-body text-xs text-gray-500 mb-3">{c.level} · {c.lessons} уроков</p>
            <ProgressBar value={c.progress} color={c.color} />
            <div className="flex justify-between mt-2">
              <span className="font-body text-xs text-gray-600">{c.progress}% пройдено</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LessonsPage() {
  const [quizActive, setQuizActive] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === quizQuestions[qIndex].correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (qIndex + 1 >= quizQuestions.length) {
      setFinished(true);
    } else {
      setQIndex((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const resetQuiz = () => {
    setQuizActive(false);
    setQIndex(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (quizActive) {
    if (finished) {
      return (
        <div className="animate-scale-in flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="text-6xl mb-4 animate-float">
            {score === quizQuestions.length ? "🏆" : score >= 2 ? "⭐" : "💪"}
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-2">
            {score === quizQuestions.length ? "ОТЛИЧНО!" : score >= 2 ? "ХОРОШО!" : "ПОПРОБУЙ ЕЩЁ!"}
          </h2>
          <p className="font-body text-gray-400 mb-2">Правильных ответов:</p>
          <div className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            {score}/{quizQuestions.length}
          </div>
          <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden mb-8">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
              style={{ width: `${(score / quizQuestions.length) * 100}%` }}
            />
          </div>
          <button
            onClick={resetQuiz}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-body font-semibold px-8 py-3 rounded-2xl"
          >
            Вернуться к урокам
          </button>
        </div>
      );
    }

    const q = quizQuestions[qIndex];
    return (
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <button onClick={resetQuiz} className="text-gray-500 hover:text-gray-300 transition-colors">
            <Icon name="ArrowLeft" size={20} />
          </button>
          <div className="font-body text-sm text-gray-400">Вопрос {qIndex + 1} из {quizQuestions.length}</div>
          <div className="font-display text-sm font-bold text-purple-400">{score} очков</div>
        </div>

        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-6">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"
            style={{ width: `${((qIndex + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>

        <div className="gradient-border rounded-3xl p-6 mb-6">
          <p className="font-body text-lg text-white font-medium leading-relaxed">{q.question}</p>
        </div>

        <div className="space-y-3 mb-6">
          {q.options.map((opt, i) => {
            let cls = "quiz-option gradient-border rounded-2xl p-4 w-full text-left flex items-center gap-3 ";
            if (answered) {
              if (i === q.correct) cls += "correct";
              else if (i === selected) cls += "wrong";
            }
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={cls}
              >
                <div
                  className="w-7 h-7 rounded-lg border border-white/20 flex items-center justify-center font-display text-sm font-bold flex-shrink-0"
                  style={{ background: answered && i === q.correct ? "rgba(57,255,20,0.2)" : "rgba(255,255,255,0.05)" }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
                <span className="font-body text-sm text-gray-200">{opt}</span>
                {answered && i === q.correct && <Icon name="CheckCircle" size={16} className="ml-auto text-green-400 flex-shrink-0" />}
                {answered && i === selected && i !== q.correct && <Icon name="XCircle" size={16} className="ml-auto text-pink-400 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {answered && (
          <button
            onClick={nextQuestion}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-body font-semibold py-4 rounded-2xl transition-all animate-scale-in"
          >
            {qIndex + 1 >= quizQuestions.length ? "Завершить квиз" : "Следующий вопрос →"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <button
        onClick={() => setQuizActive(true)}
        className="w-full gradient-border rounded-3xl p-5 mb-6 relative overflow-hidden cursor-pointer card-hover text-left"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-cyan-500/15" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-2xl animate-pulse-glow flex-shrink-0">
            🧠
          </div>
          <div>
            <div className="font-body text-xs text-purple-300 font-medium mb-0.5">МИНИ-КВИЗ</div>
            <h3 className="font-display text-lg font-bold text-white">Проверь знания!</h3>
            <p className="font-body text-sm text-gray-400">3 вопроса · ~5 минут</p>
          </div>
          <Icon name="ChevronRight" size={20} className="text-purple-400 ml-auto" />
        </div>
      </button>

      <h3 className="font-display text-lg font-semibold text-white mb-3">Последние уроки</h3>
      <div className="space-y-3">
        {lessons.map((l) => (
          <div
            key={l.id}
            className="gradient-border rounded-2xl p-4 flex items-center gap-3 card-hover cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-white/5 flex-shrink-0">
              {l.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-body text-xs text-gray-500 mb-0.5">{l.course}</div>
              <div className="font-body text-sm text-white font-medium truncate">{l.title}</div>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${l.done ? "bg-green-500/20" : "bg-white/10"}`}>
                {l.done
                  ? <Icon name="Check" size={12} className="text-green-400" />
                  : <Icon name="Play" size={10} className="text-gray-500" />
                }
              </div>
              <span className="font-body text-xs text-gray-600">{l.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactsPage() {
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

const navItems = [
  { id: "home" as Page, icon: "Home", label: "Главная" },
  { id: "courses" as Page, icon: "BookOpen", label: "Курсы" },
  { id: "lessons" as Page, icon: "Play", label: "Уроки" },
  { id: "progress" as Page, icon: "TrendingUp", label: "Прогресс" },
  { id: "profile" as Page, icon: "User", label: "Профиль" },
];

export default function Index() {
  const [page, setPage] = useState<Page>("home");

  const pageTitles: Record<Page, string> = {
    home: "EduSpark",
    profile: "Профиль",
    progress: "Прогресс",
    courses: "Курсы",
    lessons: "Уроки",
    contacts: "Контакты",
  };

  return (
    <div className="mesh-bg min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-sm">
            ✨
          </div>
          <span className="font-display text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {pageTitles[page]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage("contacts")}
            className={`p-2 rounded-xl transition-all ${page === "contacts" ? "bg-purple-500/20 text-purple-400" : "text-gray-500 hover:text-gray-300"}`}
          >
            <Icon name="MessageSquare" size={18} />
          </button>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600/60 to-cyan-500/60 flex items-center justify-center text-sm">
            👨‍🎓
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 pt-5 pb-28 max-w-md mx-auto w-full">
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "profile" && <ProfilePage />}
        {page === "progress" && <ProgressPage />}
        {page === "courses" && <CoursesPage setPage={setPage} />}
        {page === "lessons" && <LessonsPage />}
        {page === "contacts" && <ContactsPage />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/90 border-t border-white/5 px-4 py-2">
        <div className="flex justify-around max-w-md mx-auto">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={page === item.id}
              onClick={() => setPage(item.id)}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}