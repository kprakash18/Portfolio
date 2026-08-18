import { dockApps, locations } from "#/constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import useWindowStore from "#/store/window";
import useLocationStore from "#/store/location";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const docRef = useRef(null);

  useGSAP(() => {
    const dock = docRef.current;
    if (!dock) return;
    const icons = dock.querySelectorAll(".dock-icon");

    const onMove = (e) => {
      const { left } = dock.getBoundingClientRect(), mouseX = e.clientX - left;
      icons.forEach((icon) => {
        const { left: iLeft, width } = icon.getBoundingClientRect();
        const dist = Math.abs(mouseX - (iLeft - left + width / 2));
        const intensity = Math.exp(-(dist ** 2.5) / 20000);
        gsap.to(icon, { scale: 1 + 0.25 * intensity, y: -15 * intensity, duration: 0.2, ease: "power1.out" });
      });
    };

    const onLeave = () => icons.forEach((icon) => gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" }));

    dock.addEventListener("mousemove", onMove);
    dock.addEventListener("mouseleave", onLeave);
    return () => { dock.removeEventListener("mousemove", onMove); dock.removeEventListener("mouseleave", onLeave); };
  }, []);

  const toggleApp = ({ id, canOpen }) => {
    if (!canOpen) return;
    if (id === "trash") {
      const target = windows.finder;
      if (!target?.isOpen || target?.isMinimized) { setActiveLocation(locations.trash); openWindow("finder"); }
      else closeWindow("finder");
      return;
    }
    const target = windows[id];
    if (!target) return;
    target.isMinimized || !target.isOpen ? openWindow(id) : closeWindow(id);
  };

  return (
    <section id="dock">
      <div ref={docRef} className="dock-container">
        {dockApps.map(({ name, id, icon, canOpen }) => (
          <div key={id ?? name} className="relative flex justify-center" data-tooltip-id="dock-tooltip" data-tooltip-content={name} data-tooltip-delay-show={150}>
            <button type="button" className="dock-icon" aria-label={name} disabled={!canOpen} onClick={() => toggleApp({ id, canOpen })}>
              <img src={`/images/${icon}`} alt={name} loading="lazy" className={canOpen ? "" : "opacity-60"} />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock ;
