import "./PrincipalHeaderStyles.css"
import Ubicacion from '@/components/Principal/Ubicacion/Ubicacion_select'
import { MdFavoriteBorder } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { PiMapPinLight } from "react-icons/pi";


function PrincipalHeader() {
  return (
    <div className="header__container">
      <div className="header__imagen">
        <img src="/src/assets/logogid.png" alt="" />
        <div className="header__imagen-text">DreamHome</div>
      </div>
      <div className="header__elements">
        <div className="header__elements-ubicacion">
          <div className="ubicacion__fondo">
            <PiMapPinLight className="ubicacion__fondo-logo"/>
          </div>
          <Ubicacion/>
        </div>
        <div className="header__elements-cuenta">
          <MdFavoriteBorder className="favorite"/>
          <LuUser className="cuenta"/>
          <div className="bienvenida">
            <div>Hola,</div>
            <div className="user">Mi cuenta</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalHeader;