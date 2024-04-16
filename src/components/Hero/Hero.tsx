import * as React from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
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
        <p className="Hero-container__text">Welcome to</p>
        <h1 className="Hero-container__title">DREAMHOUSE</h1>
        <p className="Hero-container__text">Real State Website</p>
        <button className="Hero-container__button">Join Us</button>
      </div>
    </div>
  );
};

export default Hero;
