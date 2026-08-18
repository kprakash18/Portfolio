import { useState, useEffect } from "react";
import { navIcons, navLinks, locations } from "#/constants";
import dayjs from "dayjs";
import useWindowStore from "#/store/window";
import useLocationStore from "#/store/location";
import ThemeToggle from "./ThemeToggle";

// Hoisted outside render to prevent in-render array allocation
const statusIcons = navIcons.filter((icon) => icon.type !== "theme");

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const [time, setTime] = useState(() => dayjs().format("ddd MMM D h:mm A"));

  useEffect(() => {
    const updateTime = () => setTime(dayjs().format("ddd MMM D h:mm A"));
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (type) => {
    if (type === "finder") {
      setActiveLocation(locations.work);
    }
    openWindow(type);
  };

  return (
    <nav>
      {/* Left side: Logo & Menu Links */}
      <div>
        <img src="/images/logo.svg" alt="Apple logo" />
        <p className="font-bold">Prakash's Portfolio</p>
        <ul className="flex items-center gap-5 max-sm:hidden">
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(type)}
                className="text-sm cursor-pointer hover:underline transition-all focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Status Icons, Theme Toggle & Clock */}
      <div>
        <ul className="flex items-center gap-3">
          {statusIcons.map((icon) => (
            <li key={icon.id}>
              <img src={icon.img} className="icon" alt={`icon-${icon.id}`} />
            </li>
          ))}

          {/* Standalone Theme Toggle Component */}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <time>{time}</time>
      </div>
    </nav>
  );
};

export default Navbar;
