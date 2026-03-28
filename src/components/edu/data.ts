export type Page = "home" | "profile" | "progress" | "courses" | "lessons" | "contacts";

export const HERO_IMAGE = "https://cdn.poehali.dev/projects/359dc848-dbf4-4d0b-a7ab-33385e097d96/files/6c8be642-9d1b-4cde-9932-8ea434691543.jpg";
export const COURSES_IMAGE = "https://cdn.poehali.dev/projects/359dc848-dbf4-4d0b-a7ab-33385e097d96/files/232f0038-8b5d-4860-a005-af52cbd4204c.jpg";

export interface Course {
  id: number;
  title: string;
  level: string;
  lessons: number;
  progress: number;
  color: string;
  emoji: string;
}

export const allCourses: Record<string, Course[]> = {
  "4": [
    { id: 1, title: "Математика", level: "4 класс", lessons: 20, progress: 65, color: "#a855f7", emoji: "🧮" },
    { id: 2, title: "Русский язык", level: "4 класс", lessons: 24, progress: 50, color: "#f72585", emoji: "✏️" },
    { id: 3, title: "Окружающий мир", level: "4 класс", lessons: 18, progress: 80, color: "#39ff14", emoji: "🌍" },
    { id: 4, title: "Литература", level: "4 класс", lessons: 16, progress: 40, color: "#ff6b35", emoji: "📖" },
    { id: 5, title: "Английский", level: "4 класс", lessons: 22, progress: 30, color: "#00f5ff", emoji: "🗣️" },
    { id: 6, title: "ИЗО", level: "4 класс", lessons: 12, progress: 90, color: "#f72585", emoji: "🎨" },
  ],
  "5": [
    { id: 1, title: "Математика", level: "5 класс", lessons: 28, progress: 55, color: "#a855f7", emoji: "🧮" },
    { id: 2, title: "Русский язык", level: "5 класс", lessons: 30, progress: 45, color: "#f72585", emoji: "✏️" },
    { id: 3, title: "История", level: "5 класс", lessons: 20, progress: 70, color: "#ff6b35", emoji: "📜" },
    { id: 4, title: "Природоведение", level: "5 класс", lessons: 18, progress: 60, color: "#39ff14", emoji: "🌿" },
    { id: 5, title: "Английский", level: "5 класс", lessons: 26, progress: 35, color: "#00f5ff", emoji: "🗣️" },
    { id: 6, title: "Технология", level: "5 класс", lessons: 14, progress: 80, color: "#f72585", emoji: "🔧" },
  ],
  "6": [
    { id: 1, title: "Алгебра", level: "6 класс", lessons: 32, progress: 40, color: "#a855f7", emoji: "📐" },
    { id: 2, title: "Геометрия", level: "6 класс", lessons: 24, progress: 30, color: "#00f5ff", emoji: "📏" },
    { id: 3, title: "История", level: "6 класс", lessons: 22, progress: 75, color: "#f72585", emoji: "📜" },
    { id: 4, title: "Биология", level: "6 класс", lessons: 20, progress: 55, color: "#39ff14", emoji: "🌱" },
    { id: 5, title: "Английский", level: "6 класс", lessons: 30, progress: 50, color: "#ff6b35", emoji: "🗣️" },
    { id: 6, title: "Информатика", level: "6 класс", lessons: 18, progress: 20, color: "#a855f7", emoji: "💻" },
  ],
  "7": [
    { id: 1, title: "Алгебра", level: "7 класс", lessons: 36, progress: 35, color: "#a855f7", emoji: "📐" },
    { id: 2, title: "Физика", level: "7 класс", lessons: 28, progress: 45, color: "#00f5ff", emoji: "⚛️" },
    { id: 3, title: "История", level: "7 класс", lessons: 24, progress: 60, color: "#f72585", emoji: "📜" },
    { id: 4, title: "Биология", level: "7 класс", lessons: 22, progress: 50, color: "#39ff14", emoji: "🌱" },
    { id: 5, title: "Химия", level: "7 класс", lessons: 20, progress: 25, color: "#ff6b35", emoji: "🧪" },
    { id: 6, title: "Английский", level: "7 класс", lessons: 32, progress: 55, color: "#00f5ff", emoji: "🗣️" },
  ],
  "8": [
    { id: 1, title: "Алгебра", level: "8 класс", lessons: 40, progress: 30, color: "#a855f7", emoji: "📐" },
    { id: 2, title: "Физика", level: "8 класс", lessons: 32, progress: 40, color: "#00f5ff", emoji: "⚛️" },
    { id: 3, title: "Химия", level: "8 класс", lessons: 26, progress: 35, color: "#ff6b35", emoji: "🧪" },
    { id: 4, title: "История", level: "8 класс", lessons: 26, progress: 65, color: "#f72585", emoji: "📜" },
    { id: 5, title: "Биология", level: "8 класс", lessons: 24, progress: 45, color: "#39ff14", emoji: "🌱" },
    { id: 6, title: "Информатика", level: "8 класс", lessons: 22, progress: 20, color: "#a855f7", emoji: "💻" },
  ],
  "9": [
    { id: 1, title: "Алгебра", level: "9 класс", lessons: 44, progress: 25, color: "#a855f7", emoji: "📐" },
    { id: 2, title: "Физика", level: "9 класс", lessons: 36, progress: 35, color: "#00f5ff", emoji: "⚛️" },
    { id: 3, title: "Химия", level: "9 класс", lessons: 30, progress: 30, color: "#ff6b35", emoji: "🧪" },
    { id: 4, title: "Биология", level: "9 класс", lessons: 28, progress: 40, color: "#39ff14", emoji: "🌱" },
    { id: 5, title: "Обществознание", level: "9 класс", lessons: 24, progress: 55, color: "#f72585", emoji: "🏛️" },
    { id: 6, title: "Информатика", level: "9 класс", lessons: 26, progress: 15, color: "#a855f7", emoji: "💻" },
  ],
};

export const courses = allCourses["4"];

export const lessons = [
  { id: 1, course: "Математика", title: "Умножение на однозначное число", duration: "20 мин", done: true, emoji: "🧮" },
  { id: 2, course: "Русский язык", title: "Имя существительное", duration: "25 мин", done: true, emoji: "✏️" },
  { id: 3, course: "Окружающий мир", title: "Природные зоны России", duration: "20 мин", done: false, emoji: "🌍" },
  { id: 4, course: "Английский", title: "Числа от 1 до 20", duration: "15 мин", done: false, emoji: "🗣️" },
  { id: 5, course: "Литература", title: "Сказки Пушкина", duration: "30 мин", done: true, emoji: "📖" },
];

export const quizQuestions = [
  {
    question: "Сколько будет 8 × 7?",
    options: ["54", "56", "48", "63"],
    correct: 1,
  },
  {
    question: "Какое слово является именем существительным?",
    options: ["Бежать", "Красивый", "Школа", "Быстро"],
    correct: 2,
  },
  {
    question: "Столица России — это...",
    options: ["Санкт-Петербург", "Новосибирск", "Казань", "Москва"],
    correct: 3,
  },
  {
    question: "Сколько сантиметров в 1 метре?",
    options: ["10", "1000", "100", "50"],
    correct: 2,
  },
  {
    question: "Как по-английски будет «кошка»?",
    options: ["Dog", "Cat", "Bird", "Fish"],
    correct: 1,
  },
];

export const navItems = [
  { id: "home" as Page, icon: "Home", label: "Главная" },
  { id: "courses" as Page, icon: "BookOpen", label: "Курсы" },
  { id: "lessons" as Page, icon: "Play", label: "Уроки" },
  { id: "progress" as Page, icon: "TrendingUp", label: "Прогресс" },
  { id: "profile" as Page, icon: "User", label: "Профиль" },
];

export const pageTitles: Record<Page, string> = {
  home: "EduSpark",
  profile: "Профиль",
  progress: "Прогресс",
  courses: "Курсы",
  lessons: "Уроки",
  contacts: "Контакты",
};