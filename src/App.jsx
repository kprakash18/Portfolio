import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useThemeStore from "./store/theme";

import { Navbar, Welcome, Dock, Home } from "./components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
  Photos,
} from "./windows";

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
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
    </main>
  );
};

export default App;
