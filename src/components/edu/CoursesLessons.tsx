import { useState } from "react";
import Icon from "@/components/ui/icon";
import { ProgressBar } from "./NavItem";
import { allCourses, allQuizQuestions, lessons } from "./data";

const COURSES_IMAGE = "https://cdn.poehali.dev/projects/359dc848-dbf4-4d0b-a7ab-33385e097d96/files/232f0038-8b5d-4860-a005-af52cbd4204c.jpg";

type Page = "home" | "profile" | "progress" | "courses" | "lessons" | "contacts";

export function CoursesPage({ setPage, selectedClass, setSelectedClass }: {
  setPage: (p: Page) => void;
  selectedClass: string;
  setSelectedClass: (c: string) => void;
}) {
  const grades = ["4", "5", "6", "7", "8", "9"];
  const visibleCourses = allCourses[selectedClass] ?? [];

  return (
    <div className="animate-fade-in">
      <div className="mb-5 relative overflow-hidden rounded-2xl">
        <img src={COURSES_IMAGE} alt="Courses" className="w-full h-28 object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center px-5 bg-gradient-to-r from-background/80 to-transparent">
          <div>
            <p className="font-body text-xs text-purple-300 mb-0.5">Выбери свой класс</p>
            <h2 className="font-display text-xl font-bold text-white">{selectedClass} класс</h2>
          </div>
        </div>
      </div>

      <div className="gradient-border rounded-2xl p-3 mb-5">
        <p className="font-body text-xs text-gray-500 mb-2 px-1">Класс</p>
        <div className="grid grid-cols-6 gap-1.5">
          {grades.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedClass(g)}
              className={`py-2 rounded-xl font-display text-sm font-bold transition-all duration-200 ${
                selectedClass === g
                  ? "bg-gradient-to-br from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {visibleCourses.map((c) => (
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
            <div className="mt-2">
              <span className="font-body text-xs text-gray-600">{c.progress}% пройдено</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LessonsPage({ selectedClass }: { selectedClass: string }) {
  const quizQuestions = allQuizQuestions[selectedClass] ?? allQuizQuestions["4"];
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
              <button key={i} onClick={() => handleAnswer(i)} className={cls}>
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
            <div className="font-body text-xs text-purple-300 font-medium mb-0.5">МИНИ-КВИЗ · {selectedClass} класс</div>
            <h3 className="font-display text-lg font-bold text-white">Проверь знания!</h3>
            <p className="font-body text-sm text-gray-400">{quizQuestions.length} вопросов · ~5 минут</p>
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
