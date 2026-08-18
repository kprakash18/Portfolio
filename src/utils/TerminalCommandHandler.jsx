import {
  TechStackView,
  HelpView,
  ProjectsView,
  AboutView,
  BlogsView,
  ContactView,
  NeofetchView,
  SudoHireView,
} from "#/windows/TerminalCommands";
import { triggerConfetti } from "./canvasAnimations";
import useThemeStore from "#/store/theme";

// Evaluates and routes terminal commands to corresponding views and window actions
export const runTerminalCommand = (trimmed, ctx) => {
  const {
    projects,
    openWindow,
    closeWindow,
    setActiveLocation,
    setEntries,
    setMatrixActive,
    confettiCanvas,
    cmdHistory,
    getInitialEntries,
    handleCommand,
  } = ctx;

  // Direct number or 'open <num>' for project selection
  let num = parseInt(trimmed, 10);
  if (isNaN(num)) {
    const match = trimmed.toLowerCase().match(/^(?:project|p|proj)\s*(\d+)$/);
    if (match) num = parseInt(match[1], 10);
  }
  if (!isNaN(num) && num >= 1 && num <= projects.length) {
    setActiveLocation(projects[num - 1]);
    openWindow("finder");
    return (
      <div className="space-y-1 text-xs py-1">
        <p className="text-[#00A154] font-semibold">✓ Opened [{num}] {projects[num - 1].name} in Finder.</p>
        <p className="text-gray-400 text-[11px]">Type another number (1-8) or 'projects' to list all.</p>
      </div>
    );
  }

  const [cmd, ...rest] = trimmed.split(" ");
  const command = cmd.toLowerCase();
  const args = rest.join(" ").trim();

  if (command === "clear" || command === "cls") {
    setEntries([]);
    return null;
  }

  if (command === "exit") {
    setEntries(getInitialEntries());
    setMatrixActive(false);
    closeWindow("terminal");
    return null;
  }

  if (command === "matrix") {
    setMatrixActive(true);
    return <p className="text-[#00A154] text-xs">Matrix rain activated. Press 'ESC' or click terminal to exit.</p>;
  }

  if (command === "sudo") {
    if (args.toLowerCase() === "hire") {
      triggerConfetti(confettiCanvas);
      openWindow("contact");
      return <SudoHireView />;
    }
    return <p className="text-gray-400 text-xs">sudo: {args || "command"}: command not found. Try 'sudo hire' 😉</p>;
  }

  if (command === "open") {
    if (!args) return <p className="text-amber-500 text-xs">Usage: open &lt;1-8 | safari | contact | resume | finder&gt;</p>;
    let pNum = parseInt(args, 10);
    if (isNaN(pNum)) {
      const match = args.toLowerCase().match(/^(?:project|p|proj)\s*(\d+)$/);
      if (match) pNum = parseInt(match[1], 10);
    }
    if (!isNaN(pNum) && pNum >= 1 && pNum <= projects.length) {
      setActiveLocation(projects[pNum - 1]);
      openWindow("finder");
      return <p className="text-[#00A154] font-semibold text-xs">✓ Opened '{projects[pNum - 1].name}' in Finder.</p>;
    }
    if (["safari", "contact", "resume", "finder", "photos"].includes(args.toLowerCase())) {
      openWindow(args.toLowerCase());
      return <p className="text-[#00A154] font-semibold text-xs">✓ Opened {args.toLowerCase()} window.</p>;
    }
    return <p className="text-red-400 text-xs">Target '{args}' not found. Type 'projects' or 'help'.</p>;
  }

  if (command === "contact") {
    openWindow("contact");
    return <ContactView />;
  }

  if (command === "resume") {
    openWindow("resume");
    return <p className="text-[#00A154] dark:text-[#00ff66] font-semibold text-xs">Opening Resume viewer...</p>;
  }

  if (command === "theme") {
    if (args.toLowerCase() === "dark") {
      useThemeStore.getState().setTheme("dark");
      return <p className="text-[#00A154] dark:text-[#00ff66] font-semibold text-xs">Switched to Dark Mode</p>;
    }
    if (args.toLowerCase() === "light") {
      useThemeStore.getState().setTheme("light");
      return <p className="text-[#00A154] dark:text-[#00ff66] font-semibold text-xs">Switched to Light Mode</p>;
    }
    return <p className="text-amber-500 text-xs">Usage: theme &lt;dark | light&gt;</p>;
  }

  const commandMap = {
    help: <HelpView />,
    skills: <TechStackView />,
    techstack: <TechStackView />,
    stack: <TechStackView />,
    projects: <ProjectsView projects={projects} />,
    work: <ProjectsView projects={projects} />,
    about: <AboutView />,
    bio: <AboutView />,
    blogs: <BlogsView />,
    articles: <BlogsView />,
    neofetch: <NeofetchView />,
    prakash: <NeofetchView />,
    whoami: <p className="text-xs">prakash - Full-Stack & Backend Engineer (Developer / Creator)</p>,
    date: <p className="text-xs">{new Date().toString()}</p>,
    echo: <p className="text-xs">{args}</p>,
    history: (
      <div className="space-y-0.5 text-xs text-gray-500 my-2">
        {cmdHistory.map((c, i) => (<p key={i}><span className="text-gray-400 w-8 inline-block">{i + 1}</span> {c}</p>))}
      </div>
    ),
  };

  return commandMap[command] ?? (
    <p className="text-red-400 dark:text-red-300 text-xs">
      zsh: command not found: {trimmed}. Type{" "}
      <span
        className="text-[#00A154] dark:text-[#00ff66] font-bold underline cursor-pointer"
        onClick={() => handleCommand?.("help")}
      >
        help
      </span>{" "}
      to see available commands.
    </p>
  );
};
