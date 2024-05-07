import * as React from "react";
import "./Filtrado.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';



const filtrado: React.FC = () => {
  return (
    <div className="recommended-residences">
      <div className="titles">
        <h2>Mejor elección</h2>
        <h1>Residencias Recomendadas</h1>
      </div>
      <div className="filters_container">
        <button className="filters">
          <FontAwesomeIcon icon={faSliders} size="1x" />
          <span>Filtros</span>
        </button>
      </div>
    </div>
  );
};

export default filtrado;
