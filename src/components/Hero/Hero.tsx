import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.styles.css";

const Hero = ({logged=false}:any) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="Hero">
      <div className="Hero-container">
        <p className="Hero-container__text">Bienvenido a</p>
        <h1 className="Hero-container__title">DREAMHOME</h1>
        <p className="Hero-container__text">Sitio Web Inmobiliario</p>
        <a href={logged ? "/principal":"/inicio-sesion"} className="Hero-container__button">
            {logged ? "Principal":"Ingresar"}
          </a>
      </div>
    </div>
  );
};

export default Hero;
