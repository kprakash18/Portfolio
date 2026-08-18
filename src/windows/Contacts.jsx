import WindowControls from "#/components/WindowControls";
import { socials } from "#/constants";
import WindowWrapper from "#/hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <WindowControls target="contact" title="Contact Me" />

      <div className="p-5 space-y-5">
        <div className="flex items-center gap-4">
          <img
            src="/images/adrian.jpg"
            alt="Profile"
            className="w-20 rounded-full object-cover"
          />
          <div>
            <h3>Let's Connect</h3>
            <p className="text-sm text-gray-500 font-medium">
              Got an idea, a bug to squash, or just want to talk tech? I'm in.
            </p>
            <a
              href="mailto:kethavathprakash18@gmail.com"
              className="text-sm text-blue-600 hover:underline block mt-1 font-medium"
            >
              kethavathprakash18@gmail.com
            </a>
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