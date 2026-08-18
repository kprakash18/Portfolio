import { navIcons, navLinks } from "#/constants";
import dayjs from "dayjs";
import useWindowStore from "#/store/window";
const Navbar = ()=>{
   const { openWindow } = useWindowStore() ; 
    return(
      <nav>
        {/* left side div */}
        <div>
	      <img src="/images/logo.svg" alt="logo image"></img>
            <p className="font-bold">Prakash's Portfolio</p>
              <ul>
                 {navLinks.map( ({id, name, type}) =>(
                 <li 
                   key={id} onClick={()=> openWindow(type)}><p>{name}</p>
                </li>
                ))}
              </ul>
        </div>
        {/* right side div */}
          <div>
            <ul>
                {
	              navIcons.map(({id, img}) =>(
	                <li key={id}>
                      <img src={img} className="icon" alt={`icon-${id}`} />
	                </li>
	              ))
                }
            </ul>
            <time>{dayjs().format('ddd MMM D h:mm A')}</time>

          </div>
       </nav>
    );
}
export default Navbar ;
