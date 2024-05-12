import "./Filtrado.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import Filtros from '../../Filtros/Filtros'
import { useState } from "react";

const filtrado = () => {
  const [showFiltros, setShowFiltros] = useState(false)
  
  const handleFiltros = () =>{
    setShowFiltros(!showFiltros);
  }

  return (
    <div className="recommended-residences">
      <div className="titles">
        <h2>Mejor elección</h2>
        <h1>Residencias Recomendadas</h1>
      </div>
      <div className="filters_container">
        <button className="filters" onClick={handleFiltros}>
          <FontAwesomeIcon icon={faSliders} size="1x" />
          <span>Filtros</span>
        </button>
      </div>
      {showFiltros && <Filtros/>}
    </div>
  );
};

export default filtrado;
