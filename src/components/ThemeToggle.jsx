import { Sun, Moon } from "lucide-react";
import useThemeStore from "#/store/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const dark = theme === "dark";
  const [Icon, color, label] = dark ? [Moon, "text-blue-400 fill-blue-400/20", "Dark"] : [Sun, "text-amber-500 fill-amber-500/20", "Light"];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={toggleTheme}
      className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium cursor-pointer transition-all hover:bg-gray-200 dark:hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
      title={`Switch to ${dark ? "Light" : "Dark"} mode`}
    >
      <Icon size={14} className={color} />
      <span className="text-[11px] text-gray-800 dark:text-white/90">{label}</span>
    </button>
  );
}
