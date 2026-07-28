import useWindowStore from "#/store/window";

const WindowControls = ({target, title }) => {
  const {closeWindow, minimizeWindow, toggleMaximizeWindow} = useWindowStore() ;
  return (
   <div id="window-header">
	    <div id="window-controls">
	      <button type="button" className="close" aria-label="Close" onClick={()=> closeWindow(target)}>
	        <svg viewBox="0 0 12 12">
	          <path d="M3 3l6 6m0-6L3 9" />
	        </svg>
	      </button>
	      <button type="button" className="minimize" aria-label="Minimize" onClick={()=> minimizeWindow(target)}>
	        <svg viewBox="0 0 12 12">
	          <path d="M2.5 6h7" />
	        </svg>
	      </button>
	      <button type="button" className="maximize" aria-label="Maximize" onClick={()=> toggleMaximizeWindow(target)}>
	        <svg viewBox="0 0 12 12">
	          <path d="M6.5 2.5H9.5V5.5L6.5 2.5Z" />
	          <path d="M5.5 9.5H2.5V6.5L5.5 9.5Z" />
	        </svg>
      </button>
    </div>
    <h2>{title}</h2>
   </div>
  ); 
};

export default WindowControls;
