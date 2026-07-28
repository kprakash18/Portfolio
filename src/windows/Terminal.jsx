import { techStack } from "#/constants";
import WindowWrapper from "#/hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import WindowControls from "../components/WindowControls";

const RENDER_TIME_MS = Math.floor(Math.random() * 10) + 1;

const Terminal = ()=>{
    return(
        <>
        <WindowControls target="terminal" title="Tech Stacks" />

        <div className="techstack">
          <p>
            <span className="font-bold"> @prakash % </span>
            show tech stacks
         </p>


          <div className="label">
            <p className="w-32">Category</p>
            <p>Technologies</p>
         </div>

         <ul className="content">
            {techStack.map(({category, items}) =>(
                <li key={category} className="flex items-center">
                     <Check className="check" size={20} />
                     <h3>{category}</h3>
                     <ul>
                        {items.map((item,index) =>(
                            <li key={item}>
                                {item}{index < items.length -1 ? "," : ""}
                            </li>
                        ))}
                     </ul>
                </li>
                
            ) )
            }
         </ul>
         <div className="footnote">
            <p>
                <Check size= {20} />
                6 of 6 stacks loaded successfully(100%)
            </p>

            <p className="text-black">
                <Flag size={15} fill="black" />
                Render Time: {RENDER_TIME_MS}ms
            </p>

         </div>
        </div>
            
        </>
    );
}
// wrap the component in the higher order component
const WrappedTerminal = WindowWrapper(Terminal, "terminal") ;

const TerminalWindow = () => <WrappedTerminal />;

export default TerminalWindow ;
