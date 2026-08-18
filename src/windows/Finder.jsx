import WindowControls from "#/components/WindowControls";
import { locations } from "#/constants";
import WindowWrapper from "#/hoc/WindowWrapper";
import useLocationStore from "#/store/location";
import useWindowStore from "#/store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item) => {
    if (item.kind === "folder") setActiveLocation(item);
    else if (item.href) window.open(item.href, "_blank", "noopener,noreferrer");
    else if (item.fileType) {
      const winKey = { txt: "txtfile", img: "imgfile", pdf: "resume" }[item.fileType];
      if (winKey) openWindow(winKey, item);
    }
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={clsx({ active: item.id === activeLocation?.id })}
            onClick={() => setActiveLocation(item)}
          >
            <img src={item.icon} alt={item.name} className="w-4 h-4" />
            <p className="text-sm font-medium">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white dark:bg-[#121212] flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("My Projects", locations.work.children)}
        </div>

        <div className="content">
          <ul>
            {activeLocation?.children?.map((item) => (
              <li
                key={item.id}
                className={clsx("group cursor-pointer", item.position)}
                onClick={() => openItem(item)}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;