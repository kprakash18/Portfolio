import { useState, useEffect } from "react";
import { navIcons, navLinks, locations } from "#/constants";
import dayjs from "dayjs";
import useWindowStore from "#/store/window";
import useLocationStore from "#/store/location";
import useThemeStore from "#/store/theme";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const { theme, toggleTheme } = useThemeStore();
  const [time, setTime] = useState(() => dayjs().format("ddd MMM D h:mm A"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("ddd MMM D h:mm A"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (type) => {
    if (type === "finder") {
      setActiveLocation(locations.work);
    }
    openWindow(type);
  };

  const handleIconClick = (icon) => {
    if (icon.type === "theme") {
      toggleTheme();
    }
  };

  return (
    <nav>
      {/* left side div */}
      <div>
        <img src="/images/logo.svg" alt="logo image" />
        <p className="font-bold">Prakash's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => handleNavClick(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* right side div */}
      <div>
        <ul>
          {navIcons.map((icon) => (
            <li
              key={icon.id}
              onClick={() => handleIconClick(icon)}
              className={icon.type === "theme" ? "cursor-pointer" : ""}
              title={icon.type === "theme" ? `Switch to ${theme === "light" ? "Dark" : "Light"} mode` : undefined}
            >
              <img src={icon.img} className="icon" alt={`icon-${icon.id}`} />
            </li>
          ))}
        </ul>
        <time>{time}</time>
      </div>
    </nav>
  );
};
export default Navbar ;
