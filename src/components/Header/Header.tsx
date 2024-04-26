import * as React from "react";
import logo from "../../assets/logogid.png";
import { useNavigate } from "react-router-dom";
import "./Header.styles.css";

type loggedType = {
  logged?: boolean;
  colorNameLogo?: boolean;
  colorNameItem?: boolean;
};

type RoutesType = {
  label: string;
  route: string;
  selected: boolean;
};

const routes: RoutesType[] = [];

routes.push({
  label: "Inicio",
  route: "/",
  selected: true,
});

routes.push({
  label: "Sobre nosotros",
  route: "/aboutUs",
  selected: false,
});

routes.push({
  label: "Servicios",
  route: "/service",
  selected: false,
});

routes.push({
  label: "Contacto",
  route: "/contact-us",
  selected: false,
});

const Header: React.FC<loggedType> = ({ logged, colorNameLogo = false, colorNameItem = false }: loggedType) => {
  const navigate = useNavigate();

  const itemSelected = (label: string) => {
    routes.map((item) =>
      item.label != label ? (item.selected = false) : (item.selected = true)
    );
  };

  return (
    <header className="Header">
      <div 
        className="Header-logo"
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="DreamHome" className="Header-logo__log" />
        <p className={`${colorNameLogo ? 'Header-logo__text black-text' : 'Header-logo__text'}`}>DreamHome</p>
      </div>

      <ul className="Header-navbar">
        {routes.map(({ label, route, selected }) => (
          <li
          key={label}
            className={`${
              selected ? "header-selected" : ""
            } Header-navbar__item ${colorNameItem ? 'Header-navbar__text' : ''}`}
            onClick={() => {
              navigate(route);
              itemSelected(label);
            }}
          >
            {label}
          </li>
        ))}
        <li className="Header-navbar__join" onClick={() => navigate("/login")}>Ingresar</li>
      </ul>
    </header>
  );
};

export default Header;
