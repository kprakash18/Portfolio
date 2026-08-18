import WindowControls from "#/components/WindowControls";
import WindowWrapper from "#/hoc/WindowWrapper";
import useWindowStore from "#/store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl, images } = data;
  const rawList = images || imageUrl;
  const imageList = Array.isArray(rawList)
    ? rawList
    : rawList
    ? [rawList]
    : [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name}</p>
      </div>

      <div className="preview p-4 space-y-4 max-h-[75vh] overflow-y-auto">
        {imageList.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${name} ${idx + 1}`}
            className="w-full h-auto rounded-md object-contain"
          />
        ))}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;

