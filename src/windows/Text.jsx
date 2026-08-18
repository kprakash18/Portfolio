import WindowControls from "#/components/WindowControls";
import WindowWrapper from "#/hoc/WindowWrapper";
import useWindowStore from "#/store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, images, subtitle, description } = data;
  const imageList = [images || image].flat().filter(Boolean);

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-6 space-y-6 bg-white dark:bg-[#121212] max-h-[75vh] overflow-y-auto font-roboto">
        {imageList.length > 0 && (
          <div className="space-y-4">
            {imageList.map((src, idx) => (
              <img key={idx} src={src} alt={`${name} ${idx + 1}`} className="w-full h-auto rounded-md object-cover" />
            ))}
          </div>
        )}

        {subtitle && <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm">{subtitle}</p>}

        {Array.isArray(description) && (
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {description.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

