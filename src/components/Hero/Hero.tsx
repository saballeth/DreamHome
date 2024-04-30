import * as React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.styles.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="Hero">
      <div className="Hero-container">
        <p className="Hero-container__text">Bienvenido a</p>
        <h1 className="Hero-container__title">DREAMHOME</h1>
        <p className="Hero-container__text">Sitio Web Inmobiliario</p>
        <a href="/login" className="Hero-container__button">
            Ingresar
          </a>
      </div>
    </div>
  );
};

export default Hero;
