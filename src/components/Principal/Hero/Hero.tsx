import "./HeroStyles.css"
import { CiSearch } from "react-icons/ci";


function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__form">
        <input placeholder="Estoy buscando..." type="text" className="hero__form-text"/>
        <button className="hero__form-button">
          <CiSearch className="button__logo"/>
        </button>
      </div>
    </div>
  );
}

export default Hero;