import { create } from "zustand";

const syncDom = (dark) => typeof document !== "undefined" && document.documentElement.classList.toggle("dark", dark);

const useThemeStore = create((set) => ({
  theme: "light",
  setTheme: (theme) => { syncDom(theme === "dark"); set({ theme }); },
  toggleTheme: () => set((s) => {
    const next = s.theme === "dark" ? "light" : "dark";
    syncDom(next === "dark");
    return { theme: next };
  }),

  terminalTheme: "dark",
  setTerminalTheme: (terminalTheme) => set({ terminalTheme }),
  toggleTerminalTheme: () => set((s) => ({ terminalTheme: s.terminalTheme === "dark" ? "light" : "dark" })),
}));

export default useThemeStore;
