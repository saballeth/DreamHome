import "./Filtrado.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { CiCircleChevRight } from "react-icons/ci";
import ApiService from '@/apiCalls.service/apiCalls.service';
import { useAuth } from '@/Context/AuthContext';
import Filtros from '../../Filtros/Filtros'
import { useEffect, useState } from "react";

interface Inmueble {
  id: number;
  nombre: string;
  precio: number;
}

interface PaginationState {
  currentPage: number;
  inmueblesPerPage: number;
}

const Filtrado: React.FC = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    inmueblesPerPage: 6,
  });
  const [showFiltros, setShowFiltros] = useState(false)

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    } else {
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage - 1,
      }));
    }
  };

  const indexOfLastInmueble = pagination.currentPage * pagination.inmueblesPerPage;
  const indexOfFirstInmueble = indexOfLastInmueble - pagination.inmueblesPerPage;
  // const currentInmuebles = listData.slice(indexOfFirstInmueble, indexOfLastInmueble);

  
  const handleFiltros = () =>{
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
          onClick={() => handlePageChange('prev')}
          disabled={pagination.currentPage === 1}>
          <CiCircleChevRight className="icono-pequeno" />
        </button>
        <button
          className="button_flecha"
          onClick={() => handlePageChange('next')}
          // disabled={pagination.currentPage === Math.ceil(listData.length / pagination.inmueblesPerPage)}
        >
          <CiCircleChevRight className="icono-pequeno2" />
        </button>
      </div>
      {showFiltros && <Filtros cerrar={handleCerrar}/>}
    </div>
  );
};

export default Filtrado;