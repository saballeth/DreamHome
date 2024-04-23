import * as React from "react";
import logo from "../../assets/logogid.png";
import { useNavigate } from "react-router-dom";
import "./Header.styles.css";

type loggedType = {
  logged?: boolean;
  colorNameLogo?: boolean;
};

type RoutesType = {
  label: string;
  route: string;
  selected: boolean;
};

const routes: RoutesType[] = [];

routes.push({
  label: "Home",
  route: "/",
  selected: true,
});

routes.push({
  label: "About us",
  route: "/",
  selected: false,
});

routes.push({
  label: "Service",
  route: "/",
  selected: false,
});

routes.push({
  label: "Contact",
  route: "/contact-us",
  selected: false,
});

const Header: React.FC<loggedType> = ({ logged, colorNameLogo = false }: loggedType) => {
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
            className={`${
              selected ? "header-selected" : ""
            } Header-navbar__item`}
            onClick={() => {
              navigate(route);
              itemSelected(label);
            }}
          >
            {label}
          </li>
        ))}
        <li className="Header-navbar__join">Join is</li>
      </ul>
    </header>
  );
};

export default Header;
