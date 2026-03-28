import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NavItem } from "@/components/edu/NavItem";
import { HomePage, ProfilePage, ProgressPage, ContactsPage } from "@/components/edu/InfoPages";
import { CoursesPage, LessonsPage } from "@/components/edu/CoursesLessons";

type Page = "home" | "profile" | "progress" | "courses" | "lessons" | "contacts";

const navItems = [
  { id: "home" as Page, icon: "Home", label: "Главная" },
  { id: "courses" as Page, icon: "BookOpen", label: "Курсы" },
  { id: "lessons" as Page, icon: "Play", label: "Уроки" },
  { id: "progress" as Page, icon: "TrendingUp", label: "Прогресс" },
  { id: "profile" as Page, icon: "User", label: "Профиль" },
];

const pageTitles: Record<Page, string> = {
  home: "EduSpark",
  profile: "Профиль",
  progress: "Прогресс",
  courses: "Курсы",
  lessons: "Уроки",
  contacts: "Контакты",
};

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [selectedClass, setSelectedClass] = useState("4");

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
        {page === "courses" && <CoursesPage setPage={setPage} selectedClass={selectedClass} setSelectedClass={setSelectedClass} />}
        {page === "lessons" && <LessonsPage selectedClass={selectedClass} />}
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
