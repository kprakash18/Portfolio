import { useState } from "react";
import WindowControls from "#/components/WindowControls";
import { socials, EMAIL } from "#/constants";
import WindowWrapper from "#/hoc/WindowWrapper";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <WindowControls target="contact" title="Contact Me" />

      <div className="p-5 space-y-5">
        <div className="flex items-center gap-4">
          <img src="/images/adrian.jpg" alt="Profile" className="w-20 rounded-full object-cover" />
          <div>
            <h3>Let's Connect</h3>
            <p className="text-sm text-gray-500 font-medium">Got an idea, a bug to squash, or just want to talk tech? I'm in.</p>
            <div className="flex items-center gap-2 mt-2">
              <a href={`mailto:${EMAIL}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">{EMAIL}</a>
              <button type="button" onClick={copyEmail} className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">{copied ? "✓ Copied!" : "Copy"}</button>
            </div>
          </div>
        </div>

        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noreferrer">
                <img src={icon} alt={text} className="size-6" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;