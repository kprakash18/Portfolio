import WindowControls from "#/components/WindowControls";
import { gallery, photosLinks } from "#/constants";
import WindowWrapper from "#/hoc/WindowWrapper";
import useWindowStore from "#/store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  const handleImageClick = (item) => {
    openWindow("imgfile", {
      name: `Photo ${item.id}`,
      imageUrl: item.img,
    });
  };

  return (
    <>
      <WindowControls target="photos" title="Photos" />

      <div className="flex bg-white h-full">
        <div className="sidebar">
          <h2>Library</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} className="w-4" />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map((item) => (
              <li key={item.id} onClick={() => handleImageClick(item)}>
                <img
                  src={item.img}
                  alt={`Gallery item ${item.id}`}
                  className="cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
