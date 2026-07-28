import useWindowStore from "#/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const windowRef = useRef(null);
    const { windows, closeWindow, focusWindow } = useWindowStore();
    const windowState = windows[windowKey];
    const isOpen = Boolean(windowState?.isOpen);
    const isMinimized = Boolean(windowState?.isMinimized);
    const isMaximized = Boolean(windowState?.isMaximized);

    useGSAP(() => {
      const element = windowRef.current;
      if (!element || !isOpen || isMinimized) return;
      element.style.display = "block" ;
      gsap.fromTo(
        element,
        {scale: 0.8, opacity: 0, y : 40},
        {scale: 1, opacity: 1, y: 0, duration: 1, ease:"power3.out"}
      )
    }, [isOpen, isMinimized]);

    useGSAP(()=>{
      const element = windowRef.current ;
      if(!element) return ;
      const [instance] = Draggable.create(element, {
        onPress : ()=> focusWindow(windowKey),
        enabled: !isMaximized,
      }) ;
      return() => instance.kill() ;
    }, [isMaximized])
    useLayoutEffect(()=>{
      const element = windowRef.current ;
      if(!element) return ;
      element.style.display = isOpen && !isMinimized ? "block" : "none" ;
    }, [isOpen, isMinimized]) ;

    useLayoutEffect(()=>{
      const element = windowRef.current ;
      if(!element || isMaximized) return ;
      gsap.set(element, { clearProps: "x,y,scale,transform" }) ;
    }, [isMaximized]) ;

    return (
      <section
        id={windowKey}
        ref={windowRef}
        className={isMaximized ? "window-maximized" : ""}
        style={{ zIndex: windowState.zIndex }}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component
          {...props}
          windowData={windowState.data}
          onClose={() => closeWindow(windowKey)}
        />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default WindowWrapper;
