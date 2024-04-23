import * as React from "react";
import logo from "../../assets/logogid.png";
import "./Header.styles.css";
import { useNavigate } from "react-router-dom";

type loggedType = {
  logged: boolean;
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
  route: "/aboutUs",
  selected: false,
});

routes.push({
  label: "Service",
  route: "/service",
  selected: false,
});

routes.push({
  label: "Contact",
  route: "/contact",
  selected: false,
});

const Header: React.FC<loggedType> = ({ logged }: loggedType) => {
  const navigate = useNavigate();

  const itemSelected = (label: string) => {
    routes.map((item) =>
      item.label != label ? (item.selected = false) : (item.selected = true)
    );
  };

  return (
    <header className="Header">
      <div className="Header-logo">
      <a href="/"><img src={logo} alt="DreamHome" className="Header-logo__log" /></a>
        <p className="Header-logo__text" onClick={() => navigate("/")}>DreamHome</p>
      </div>

      <ul className="Header-navbar">
        {routes.map(({ label, route, selected }) => (
          <li
          key={label}
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
        <li className="Header-navbar__join" onClick={() => navigate("/login")}>Join is</li>
      </ul>
    </header>
  );
};

export default Header;
