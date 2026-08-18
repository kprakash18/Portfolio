import { locations } from "#/constants";
import useLocationStore from "#/store/location";
import useWindowStore from "#/store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const Home = () => {
  const { setActiveLocation } = useLocationStore(), { openWindow } = useWindowStore();
  useGSAP(() => { Draggable.create(".folder-draggable", { type: "x,y", edgeResistance: 0.65 }); }, []);

  return (
    <section id="home">
      <ul>
        {(locations.work.children ?? []).map((project) => (
          <li
            key={project.id}
            className={clsx("folder-draggable group cursor-pointer", project.position)}
            onClick={() => { setActiveLocation(project); openWindow("finder"); }}
          >
            <img src={project.icon} alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
