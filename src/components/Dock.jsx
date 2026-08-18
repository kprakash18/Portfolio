import { dockApps, locations } from "#/constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import useWindowStore from "#/store/window";
import useLocationStore from "#/store/location";

const Dock = ()=>{
    const {openWindow, closeWindow, windows} = useWindowStore() ;
    const { setActiveLocation } = useLocationStore();
    const docRef = useRef(null) ;
    useGSAP(()=>{
        const dock = docRef.current ;
        if(!dock) return ()=>{};
        const icons = dock.querySelectorAll(".dock-icon") ;

        const animateIcons = (mouseX) =>{
            const {left} = dock.getBoundingClientRect() ;

            icons.forEach((icon) =>{
                const  {left : iconLeft , width} = icon.getBoundingClientRect();
                const iconCenter = iconLeft - left + width / 2 ;
                const distance = Math.abs(mouseX - iconCenter) ;
                const intensity = Math.exp(-(distance ** 2.5)/ 20000 ) ;

                gsap.to(icon, {
                    scale : 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out",
                });
            });
        };

        const handleMouseMove = (event) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(event.clientX - left);
        };

        const handleMouseOut = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
            });
        };


        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", handleMouseOut);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", handleMouseOut);
        }
    }, []);

    const toggleApp = (app) =>{
        if(!app.canOpen) return ;

        if (app.id === "trash") {
            const targetWindow = windows.finder;
            if (!targetWindow?.isOpen || targetWindow?.isMinimized) {
                setActiveLocation(locations.trash);
                openWindow("finder");
            } else {
                closeWindow("finder");
            }
            return;
        }

        const targetWindow = windows[app.id] ;

        if(!targetWindow) return ;

        if(targetWindow.isMinimized){
            openWindow(app.id) ;
        }else if(targetWindow.isOpen){ // window is open
            closeWindow(app.id) ; // close window
        }else{
            openWindow(app.id) ;
        }
    }
    return(
        <section id="dock">
            <div ref={docRef} className="dock-container">
            {dockApps.map(({name,id,icon,canOpen}) =>(
                <div
                    key={id ?? name}
                    className="relative flex justify-center"
                    data-tooltip-id="dock-tooltip"
                    data-tooltip-content={name}
                    data-tooltip-delay-show={150}
                >
                    <button
                    type="button"
                    className="dock-icon"
                    aria-label={name}
                    disabled={!canOpen}
                    onClick={()=> toggleApp({id,canOpen })}
                    >
                        <img 
                            src={`/images/${icon}`}
                            alt={name}
                            loading="lazy"
                            className={canOpen ? "" : "opacity-60"}
                        />
                        
                    </button>
                </div>
            ))}
            <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    );
}

export default Dock ;
