import "./PrincipalHeaderStyles.css"
import Ubicacion from '@/components/Principal/Ubicacion/Ubicacion_select'
import { MdFavoriteBorder } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { PiMapPinLight } from "react-icons/pi";
import { useAuth } from "@/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonGroupUser from "./ButtonGroupUser/ButtonGroupUser";
import { FaCaretRight } from "react-icons/fa";

type loggedType = {
  colorNameLogo?: boolean;
  colorUbi?: boolean;
};


const PrincipalHeader:  React.FC<loggedType> = ({ colorNameLogo = false, colorUbi = false}: loggedType) =>{
  const auth = useAuth()
  const navigate = useNavigate()
  const [showOptions, setShowOptions] = useState(false);
  let user;


  if (typeof auth?.user === 'string') {
    user = JSON.parse(auth?.user);
  } else {
    user = auth?.user;
  }
  
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navigatePrincipal = async () => {
    navigate('/principal');
  }

  const handleFavorite = async () => {
    navigate('/favoritos');
  }

  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  }

  return (
    <div className="header__container">
      <div className="header__imagen" onClick={navigatePrincipal}>
        <img src="/src/assets/logogid.png" alt="" />
        <div className={`header__imagen-text ${colorNameLogo ? 'text_blue' : ""}`}>DreamHome</div>
      </div>
      <div className="header__elements">
        <div className={`header__elements-ubicacion ${colorUbi ? 'container_ubi_fondo' : ''}`}>
          <div className={`ubicacion__fondo ${colorUbi ? 'logo_fondo' : ''}`}>
            <PiMapPinLight className="ubicacion__fondo-logo"/>
          </div>
          <Ubicacion/>
        </div>
        <div className="header__elements-cuenta">
          <MdFavoriteBorder className="favorite" onClick={handleFavorite}/>
          <LuUser className="cuenta" onClick={handleShowOptions}/>
          {showOptions == true && (
            <div className="options__user">
              <FaCaretRight />
              <ButtonGroupUser/>
            </div>
          )}
          <div className="bienvenida">
            <div>Hola,</div>
            <div className="user">{auth?.isAuthenticated ? (capitalizeFirstLetter(user?.nombre)) : ("Mi cuenta")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalHeader;