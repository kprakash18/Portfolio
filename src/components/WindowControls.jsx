import useWindowStore from "#/store/window";

const WindowControls = ({ target, title }) => {
  const { closeWindow, minimizeWindow, toggleMaximizeWindow } = useWindowStore();

  const buttons = [
    { type: "close", action: closeWindow, path: <path d="M3.5 3.5l5 5m0-5l-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /> },
    { type: "minimize", action: minimizeWindow, path: <path d="M2.5 6h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /> },
    { type: "maximize", action: toggleMaximizeWindow, path: <><path d="M6.5 2.5H9.5V5.5L6.5 2.5Z" fill="currentColor" /><path d="M5.5 9.5H2.5V6.5L5.5 9.5Z" fill="currentColor" /></> },
  ];

  const controls = (
    <div id="window-controls">
      {buttons.map(({ type, action, path }) => (
        <button key={type} type="button" className={type} aria-label={type} onClick={(e) => { e.stopPropagation(); action(target); }}>
          <svg viewBox="0 0 12 12">{path}</svg>
        </button>
      ))}
    </div>
  );

  return title ? (
    <div id="window-header">
      {controls}
      <h2>{title}</h2>
      <div className="w-12" aria-hidden="true" />
    </div>
  ) : controls;
};

export default WindowControls;
