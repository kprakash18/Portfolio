import { useState } from "react";
import { techStack, blogPosts, locations, socials, EMAIL, TERMINAL_HELP, NEOFETCH_INFO } from "#/constants";
import { Check, Flag, Sparkles, ExternalLink } from "lucide-react";

export const TechStackView = () => (
  <div className="techstack">
    <div className="label"><p className="w-36">Category</p><p>Technologies</p></div>
    <ul className="content">
      {techStack.map(({ category, items }) => (
        <li key={category} className="flex items-center">
          <Check className="check shrink-0" size={20} />
          <h3 className="shrink-0">{category}</h3>
          <p className="flex items-center gap-2 flex-wrap">{items.join(", ")}</p>
        </li>
      ))}
    </ul>
    <div className="footnote">
      <p><Check size={20} />{techStack.length} of {techStack.length} stacks loaded successfully(100%)</p>
      <p className="terminal-body-text flex items-center gap-1.5"><Flag size={15} className="terminal-body-text" />Render Time: 6ms</p>
    </div>
    <p className="text-xs terminal-subtext mt-4 select-none">
      Type <span className="terminal-accent font-semibold">'projects'</span> (or <span className="terminal-accent font-semibold">'1' - '8'</span>) to view projects, or <span className="terminal-accent font-semibold">'help'</span> for all commands.
    </p>
  </div>
);

export const HelpView = () => (
  <div className="space-y-1.5 py-1 text-xs content border-y border-dashed my-2">
    <p className="terminal-accent font-semibold mb-2">Available Terminal Commands:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
      {TERMINAL_HELP.map(({ cmd, desc }) => (
        <div key={cmd} className="flex items-start gap-2">
          <span className="terminal-accent font-bold w-36 shrink-0">{cmd}</span>
          <span className="terminal-muted">{desc}</span>
        </div>
      ))}
    </div>
  </div>
);

export const ProjectsView = ({ projects }) => (
  <div className="space-y-2 text-xs py-1 content border-y border-dashed my-2">
    <p className="terminal-accent font-semibold mb-1">Featured Projects ({projects.length}):</p>
    <ul className="space-y-2">
      {projects.map((proj, idx) => (
        <li key={proj.id} className="flex items-start gap-2.5">
          <Check className="check shrink-0 mt-0.5" size={18} />
          <div>
            <div className="flex items-center gap-2">
              <span className="terminal-accent font-semibold">[{idx + 1}]</span>
              <h3 className="font-semibold terminal-title">{proj.name}</h3>
            </div>
            {proj.children?.find((c) => c.subtitle) && (
              <p className="terminal-muted text-xs mt-0.5">{proj.children.find((c) => c.subtitle)?.subtitle}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
    <p className="text-xs terminal-subtext mt-2 select-none">
      Type <span className="terminal-accent font-semibold">'1' to '8'</span> (or <span className="terminal-accent font-semibold">'open 1'</span>) to open that project in Finder.
    </p>
  </div>
);

export const AboutView = () => (
  <div className="space-y-2 text-xs py-2 leading-relaxed content border-y border-dashed my-2">
    <h3 className="font-semibold text-sm terminal-title">{locations.about.name}</h3>
    <p className="terminal-body-text">
      Hey! I'm Prakash 👋 — Full-Stack & Backend Engineer specializing in JavaScript, React, Node.js, Express, and distributed databases (PostgreSQL, MongoDB, Neo4j).
    </p>
    <p className="terminal-subtext text-[11px]">Type 'contact' or 'resume' to connect or review qualifications.</p>
  </div>
);

export const BlogsView = () => (
  <div className="space-y-2 text-xs py-1 content border-y border-dashed my-2">
    <p className="terminal-accent font-semibold mb-1">Published Articles ({blogPosts.length}):</p>
    <ul className="space-y-2">
      {blogPosts.map((post) => (
        <li key={post.id} className="space-y-1">
          <div className="flex items-center gap-2">
            <Check className="check shrink-0" size={18} />
            <h3 className="font-semibold terminal-title">{post.title}</h3>
          </div>
          <div className="flex items-center gap-3 terminal-subtext text-[11px] ms-6">
            <span>{post.date}</span>
            <a href={post.link} target="_blank" rel="noreferrer" className="terminal-accent hover:underline flex items-center gap-1">
              Read Article <ExternalLink size={11} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const ContactView = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-1.5 py-2 text-xs content border-y border-dashed my-2">
      <p className="terminal-accent font-semibold">Opening Contact window...</p>
      <div className="flex items-center gap-2">
        <p className="terminal-body-text">
          Email: <a href={`mailto:${EMAIL}`} className="terminal-accent underline">{EMAIL}</a>
        </p>
        <button
          type="button"
          onClick={copyEmail}
          className="text-[11px] font-semibold px-2 py-0.5 rounded border border-[#00A154] terminal-accent hover:bg-[#00A154]/10 transition-colors cursor-pointer"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <div className="flex gap-4 pt-1">
        {socials.map((s) => (
          <a key={s.id} href={s.link} target="_blank" rel="noreferrer" className="terminal-accent hover:underline">{s.text}</a>
        ))}
      </div>
    </div>
  );
};

export const NeofetchView = () => (
  <div className="flex flex-col sm:flex-row gap-6 items-start py-2 text-xs content border-y border-dashed my-2">
    <pre className="terminal-accent font-bold text-[11px] leading-tight select-none">
      {`       .:'\n      __ :'__\n   .'\`__\`-'__\`\`.\n  :__________.-'\n  :_________:\n   :_________:\`-.__\n    \`.__.-.__.'`}
    </pre>
    <div className="space-y-1">
      <p><span className="terminal-accent font-bold">prakash</span>@<span className="font-bold terminal-title">MacBook-Pro</span></p>
      <p className="terminal-subtext">--------------------------</p>
      {Object.entries({ OS: NEOFETCH_INFO.os, Host: NEOFETCH_INFO.host, Kernel: NEOFETCH_INFO.kernel, Role: NEOFETCH_INFO.role, Shell: NEOFETCH_INFO.shell, Memory: NEOFETCH_INFO.memory }).map(([k, v]) => (
        <p key={k}><span className="font-semibold terminal-muted">{k}:</span> <span className="terminal-body-text">{v}</span></p>
      ))}
      <div className="flex gap-1.5 pt-2">
        {NEOFETCH_INFO.palette.map((c) => (
          <span key={c} className="size-3.5 rounded-sm inline-block border border-black/20" style={{ backgroundColor: c }} />
        ))}
      </div>
    </div>
  </div>
);

export const SudoHireView = () => (
  <div className="p-3 border border-dashed border-[#00A154] rounded-lg text-xs space-y-1 text-[#00A154] my-2 bg-emerald-500/5">
    <p className="font-bold flex items-center gap-1.5"><Sparkles size={16} /> CONGRATULATIONS! You've unlocked the hire command!</p>
    <p className="terminal-body-text">Prakash is ready to build exceptional software with your team. The Contact window has been opened for you!</p>
  </div>
);

