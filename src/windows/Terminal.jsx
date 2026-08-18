import { useState, useRef, useEffect, useMemo } from "react";
import { locations, TERMINAL_COMMANDS } from "#/constants";
import WindowWrapper from "#/hoc/WindowWrapper";
import WindowControls from "#/components/WindowControls";
import useWindowStore from "#/store/window";
import useLocationStore from "#/store/location";
import useThemeStore from "#/store/theme";
import { TechStackView } from "./TerminalCommands";
import { startMatrixRain } from "#/utils/canvasAnimations";
import { runTerminalCommand } from "#/utils/TerminalCommandHandler";

const getInitialEntries = () => [
  { id: "init", command: "show tech stacks", output: <TechStackView /> },
];

const Terminal = () => {
  const { openWindow, closeWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const { terminalTheme } = useThemeStore();
  const isDark = terminalTheme === "dark";
  const promptSymbol = isDark ? "❯ " : " @prakash % ";

  const [inputVal, setInputVal] = useState("");
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [matrixActive, setMatrixActive] = useState(false);
  const [entries, setEntries] = useState(getInitialEntries);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const confettiCanvasRef = useRef(null);
  const matrixCanvasRef = useRef(null);
  const projects = useMemo(() => locations.work.children ?? [], []);

  useEffect(() => {
    if (matrixActive) return startMatrixRain(matrixCanvasRef.current);
  }, [matrixActive]);

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [entries, matrixActive]);

  const handleCommand = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const newHistory = [...cmdHistory, trimmed];
    setCmdHistory(newHistory);
    setHistoryIdx(-1);
    setInputVal("");

    const output = runTerminalCommand(trimmed, {
      projects,
      openWindow,
      closeWindow,
      setActiveLocation,
      setEntries,
      setMatrixActive,
      confettiCanvas: confettiCanvasRef.current,
      cmdHistory: newHistory,
      getInitialEntries,
      handleCommand,
    });

    if (output) {
      setEntries((prev) => [...prev, { id: `${Date.now()}-${Math.random()}`, command: trimmed, output }]);
    }
  };

  const handleKeyDown = (e) => {
    if (matrixActive) {
      if (["Escape", "q"].includes(e.key) || (e.ctrlKey && e.key === "c")) setMatrixActive(false);
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp" && cmdHistory.length) {
      e.preventDefault();
      const idx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(idx);
      setInputVal(cmdHistory[idx]);
    } else if (e.key === "ArrowDown" && historyIdx !== -1) {
      e.preventDefault();
      const idx = historyIdx + 1;
      setHistoryIdx(idx < cmdHistory.length ? idx : -1);
      setInputVal(idx < cmdHistory.length ? cmdHistory[idx] : "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const search = inputVal.toLowerCase().trim();
      const matches = TERMINAL_COMMANDS.filter((c) => c.startsWith(search));
      if (matches.length > 0) {
        const currentIdx = matches.indexOf(inputVal.toLowerCase().trim());
        const nextMatch = matches[(currentIdx + 1) % matches.length];
        setInputVal(nextMatch);
      }
    }
  };

  return (
    <>
      <WindowControls target="terminal" title="Tech Stacks" />

      <div
        ref={containerRef}
        className="techstack terminal-body"
        onClick={() => {
          if (!window.getSelection()?.toString()) {
            inputRef.current?.focus();
          }
        }}
      >
        <canvas ref={confettiCanvasRef} className="pointer-events-none absolute inset-0 z-30 size-full" />

        {matrixActive && (
          <div className="matrix-overlay" onClick={() => setMatrixActive(false)}>
            <div className="matrix-exit-badge">Click or press ESC to exit Matrix</div>
            <canvas ref={matrixCanvasRef} className="size-full" />
          </div>
        )}

        <div className="space-y-4">
          {entries.length === 0 && (
            <div className="text-gray-400 text-xs py-1 space-y-1 select-none">
              <p className="text-gray-500 font-medium">Terminal cleared.</p>
              <p>Type <span className="text-[#00A154] font-semibold">help</span> to view commands, <span className="text-[#00A154] font-semibold">skills</span> for tech stack, or <span className="text-[#00A154] font-semibold">projects</span> to browse work.</p>
            </div>
          )}

          {entries.map((entry) => (
            <div key={entry.id} className="space-y-1">
              <p className="select-none flex items-center gap-1.5 font-roboto">
                <span className="terminal-prompt">{promptSymbol}</span>
                <span className={`font-normal select-text ${isDark ? "text-[#00ff66]" : "text-gray-900"}`}>
                  {entry.command}
                </span>
              </p>
              {entry.output && <div className="mt-1">{entry.output}</div>}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 mt-3 font-roboto">
          <span className="terminal-prompt">{promptSymbol}</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'projects', 'theme dark'..."
            className="terminal-input"
            aria-label="Terminal command input"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
};

const WrappedTerminal = WindowWrapper(Terminal, "terminal");

const TerminalWindow = () => {
  const isOpen = useWindowStore((state) => state.windows.terminal?.isOpen);
  const terminalTheme = useThemeStore((state) => state.terminalTheme);
  return (
    <WrappedTerminal
      key={isOpen ? "open" : "closed"}
      className={terminalTheme === "dark" ? "dark-terminal" : "light-terminal"}
    />
  );
};

export default TerminalWindow;