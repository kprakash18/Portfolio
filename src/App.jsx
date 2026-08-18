import { useEffect, lazy, Suspense } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useThemeStore from "./store/theme";
import { Navbar, Welcome, Dock, Home } from "./components";
import {
  Terminal,
  Safari,
  Finder,
  Text,
  Image,
  Contact,
  Photos,
} from "./windows";

const Resume = lazy(() => import("./windows/Resume"));

gsap.registerPlugin(Draggable);

const App = () => {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Terminal />
      <Safari />
      <Suspense fallback={null}>
        <Resume />
      </Suspense>
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
    </main>
  );
};

export default App;
