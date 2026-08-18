import useWindowStore from "#/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const windowRef = useRef(null);
    const { windows, closeWindow, focusWindow } = useWindowStore();
    const { isOpen, isMinimized, isMaximized, zIndex, data } = windows[windowKey] || {};

    useGSAP(() => {
      const el = windowRef.current;
      if (!el || !isOpen || isMinimized) return;
      el.style.display = "block";
      gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40 }, { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    }, [isOpen, isMinimized]);

    useGSAP(() => {
      const el = windowRef.current;
      if (!el) return;
      const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey), enabled: !isMaximized });
      return () => instance.kill();
    }, [isMaximized]);

    useLayoutEffect(() => {
      const el = windowRef.current;
      if (el) el.style.display = isOpen && !isMinimized ? "block" : "none";
    }, [isOpen, isMinimized]);

    useLayoutEffect(() => {
      const el = windowRef.current;
      if (el && !isMaximized) gsap.set(el, { clearProps: "x,y,scale,transform" });
    }, [isMaximized]);

    return (
      <section
        id={windowKey}
        ref={windowRef}
        className={`${isMaximized ? "window-maximized" : ""} ${props.className || ""}`.trim()}
        style={{ zIndex }}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} windowData={data} onClose={() => closeWindow(windowKey)} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default WindowWrapper;
