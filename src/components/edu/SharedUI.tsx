import Icon from "@/components/ui/icon";
import { Page } from "./data";

export function NavItem({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
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

export function ProgressBar({ value, color = "#a855f7" }: { value: number; color?: string }) {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}, #00f5ff)` }}
      />
    </div>
  );
}

export type { Page };
