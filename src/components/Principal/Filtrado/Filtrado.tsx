import { Children, useEffect } from "react";
import "./Filtrado.css"
import Aos from "aos";
const Hero: React.FC = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  
    return (
     <header>
        <div className="contenedor">
        <div>
            <nav>
                <a href="">Bonito dia ¿verdad?</a>
            </nav>
            
        </div>    
        </div>
        
     </header> 
    );
  };
  
  export default Hero;
  