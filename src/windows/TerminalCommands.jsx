import { techStack, blogPosts, locations, socials, TERMINAL_HELP, NEOFETCH_INFO } from "#/constants";
import { Check, Flag, Sparkles, ExternalLink } from "lucide-react";
const RENDER_TIME_MS = 6;

export const TechStackView = () => (
  <div className="techstack">
    <div className="label">
      <p className="w-36">Category</p>
      <p>Technologies</p>
    </div>
    <ul className="content">
      {techStack.map(({ category, items }) => (
        <li key={category} className="flex items-center">
          <Check className="check shrink-0" size={20} />
          <h3 className="shrink-0">{category}</h3>
          <ul className="flex items-center gap-2 whitespace-nowrap flex-wrap">
            {items.map((item, i) => (
              <li key={item} className="whitespace-nowrap">
                {item}{i < items.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <div className="footnote">
      <p><Check size={20} />{techStack.length} of {techStack.length} stacks loaded successfully(100%)</p>
      <p className="text-black dark:text-gray-300"><Flag size={15} className="fill-black dark:fill-gray-300" />Render Time: {RENDER_TIME_MS}ms</p>
    </div>
    <p className="text-xs text-gray-400 dark:text-zinc-500 mt-4 select-none">
      Type <span className="text-[#00A154] dark:text-[#00ff66] font-semibold">help</span> to view commands, <span className="text-[#00A154] dark:text-[#00ff66] font-semibold">projects</span> to browse work, or <span className="text-[#00A154] dark:text-[#00ff66] font-semibold">theme dark</span> to switch theme.
    </p>
  </div>
);

export const HelpView = () => (
  <div className="space-y-2 text-xs py-2">
    <div className="label"><p className="w-36">Command</p><p>Description</p></div>
    <div className="content py-3 my-2 border-y border-dashed space-y-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
        {TERMINAL_HELP.map(({ cmd, desc }) => (
          <div key={cmd}><span className="text-[#00A154] dark:text-cyan-400 font-semibold">{cmd}</span> : <span className="dark:text-gray-300">{desc}</span></div>
        ))}
      </div>
    </div>
  </div>
);

export const ProjectsView = ({ projects }) => (
  <div className="space-y-2 py-2 text-xs">
    <div className="label"><p className="w-36">Number</p><p>Project Name & Details</p></div>
    <ul className="content py-3 my-2 border-y border-dashed space-y-2.5">
      {projects.map((proj, idx) => (
        <li key={proj.id} className="flex items-start gap-3">
          <Check className="check shrink-0 mt-0.5" size={18} />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#00A154] dark:text-[#00ff66] font-semibold">[{idx + 1}]</span>
              <h3 className="font-semibold text-gray-900 dark:text-cyan-400">{proj.name}</h3>
            </div>
            {proj.children?.find((c) => c.subtitle) && (
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{proj.children.find((c) => c.subtitle)?.subtitle}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
    <p className="text-xs text-gray-400 dark:text-zinc-500 mt-2 select-none">
      Type <span className="text-[#00A154] dark:text-[#00ff66] font-semibold">'1' to '8'</span> (or <span className="text-[#00A154] dark:text-[#00ff66] font-semibold">'open 1'</span>) to open that project in Finder.
    </p>
  </div>
);

export const AboutView = () => (
  <div className="space-y-2 text-xs py-2 leading-relaxed content border-y border-dashed my-2">
    <h3 className="font-semibold text-sm text-gray-900 dark:text-cyan-400">{locations.about.name}</h3>
    <p className="dark:text-gray-200">
      Hey! I'm Prakash 👋 — Full-Stack & Backend Engineer specializing in JavaScript, React, Node.js, Express, and distributed databases (PostgreSQL, MongoDB, Neo4j).
    </p>
    <p className="text-gray-400 dark:text-zinc-500 text-[11px]">Type 'contact' or 'resume' to connect or review qualifications.</p>
  </div>
);

export const BlogsView = () => (
  <div className="space-y-2 py-2 text-xs">
    <div className="label"><p className="w-36">Publication</p><p>Title & Link</p></div>
    <ul className="content py-3 my-2 border-y border-dashed space-y-3">
      {blogPosts.map((post) => (
        <li key={post.id} className="space-y-1">
          <div className="flex items-center gap-2">
            <Check className="check shrink-0" size={18} />
            <h3 className="font-semibold text-gray-900 dark:text-cyan-400">{post.title}</h3>
          </div>
          <div className="flex items-center gap-3 text-gray-400 dark:text-zinc-400 text-[11px] ms-6">
            <span>{post.date}</span>
            <a href={post.link} target="_blank" rel="noreferrer" className="text-[#00A154] dark:text-[#00ff66] hover:underline flex items-center gap-1">
              Read Article <ExternalLink size={11} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const ContactView = () => (
  <div className="space-y-1.5 py-2 text-xs content border-y border-dashed my-2">
    <p className="text-[#00A154] dark:text-[#00ff66] font-semibold">Opening Contact window...</p>
    <p className="dark:text-gray-200">Email: <a href="mailto:kethavathprakash18@gmail.com" className="text-[#00A154] dark:text-[#00ff66] underline">kethavathprakash18@gmail.com</a></p>
    <div className="flex gap-4 pt-1">
      {socials.map((s) => (
        <a key={s.id} href={s.link} target="_blank" rel="noreferrer" className="text-[#00A154] dark:text-cyan-400 hover:underline">
          {s.text}
        </a>
      ))}
    </div>
  </div>
);

export const NeofetchView = () => (
  <div className="flex flex-col sm:flex-row gap-6 items-start py-2 text-xs content border-y border-dashed my-2">
    <pre className="text-[#00A154] dark:text-[#00ff66] font-bold text-[11px] leading-tight select-none">
      {`       .:'\n      __ :'__\n   .'\`__\`-'__\`\`.\n  :__________.-'\n  :_________:\n   :_________:\`-.__\n    \`.__.-.__.'`}
    </pre>
    <div className="space-y-1">
      <p><span className="text-[#00A154] dark:text-[#00ff66] font-bold">prakash</span>@<span className="font-bold dark:text-cyan-400">MacBook-Pro</span></p>
      <p className="text-gray-400 dark:text-zinc-600">--------------------------</p>
      <p><span className="font-semibold text-gray-500 dark:text-zinc-400">OS:</span> <span className="dark:text-gray-200">{NEOFETCH_INFO.os}</span></p>
      <p><span className="font-semibold text-gray-500 dark:text-zinc-400">Host:</span> <span className="dark:text-gray-200">{NEOFETCH_INFO.host}</span></p>
      <p><span className="font-semibold text-gray-500 dark:text-zinc-400">Kernel:</span> <span className="dark:text-gray-200">{NEOFETCH_INFO.kernel}</span></p>
      <p><span className="font-semibold text-gray-500 dark:text-zinc-400">Role:</span> <span className="dark:text-gray-200">{NEOFETCH_INFO.role}</span></p>
      <p><span className="font-semibold text-gray-500 dark:text-zinc-400">Shell:</span> <span className="dark:text-gray-200">{NEOFETCH_INFO.shell}</span></p>
      <p><span className="font-semibold text-gray-500 dark:text-zinc-400">Memory:</span> <span className="dark:text-gray-200">{NEOFETCH_INFO.memory}</span></p>
      <div className="flex gap-1.5 pt-2">
        {NEOFETCH_INFO.palette.map((c) => (
          <span key={c} className="size-3.5 rounded-sm inline-block border border-black/20 dark:border-white/20" style={{ backgroundColor: c }} />
        ))}
      </div>
    </div>
  </div>
);

export const SudoHireView = () => (
  <div className="p-3 border border-dashed border-[#00A154] dark:border-[#00ff66] rounded-lg text-xs space-y-1 text-[#00A154] dark:text-[#00ff66] my-2 bg-emerald-500/5">
    <p className="font-bold flex items-center gap-1.5"><Sparkles size={16} /> CONGRATULATIONS! You've unlocked the hire command!</p>
    <p className="text-black dark:text-gray-200">Prakash is ready to build exceptional software with your team. The Contact window has been opened for you!</p>
  </div>
);

