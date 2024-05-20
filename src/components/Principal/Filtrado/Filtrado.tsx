import { useState } from "react";
import "./Filtrado.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { CiCircleChevRight } from "react-icons/ci";
import Filtros from "@/components/Filtros/Filtros";
import { usePagination } from "@/Context/PaginacionContext";

const Filtrado = () => {
  const [showFiltros, setShowFiltros] = useState(false)
  const {prevPage, nextPage} = usePagination();

  const handleFiltros = () => {
    setShowFiltros(!showFiltros);
  }

  const handleCerrar = (value: any) => {
    setShowFiltros(!value);
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
        <button
          className="button_flecha"
          onClick={prevPage}>
          <CiCircleChevRight className="icono-pequeno" />
        </button>
        <button
          className="button_flecha"
          onClick={nextPage}
        >
          <CiCircleChevRight className="icono-pequeno2" />
        </button>
      </div>
      {showFiltros && <Filtros cerrar={handleCerrar} />}
    </div>
  );
};

export default Filtrado;