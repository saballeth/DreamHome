import { useState } from "react";
import "./Filtrado.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { CiCircleChevRight } from "react-icons/ci";
import Filtros from "@/components/Filtros/Filtros";

type Props = {
 actualPage: {
  start: number,
  end: number,
}
 allPages: number
 setActualPage: Function
}

// interface Inmueble {
//   id: number;
//   nombre: string;
//   precio: number;
// }

// interface PaginationState {
//   currentPage: number;
//   inmueblesPerPage: number;
// }

const Filtrado = ({actualPage, setActualPage, allPages }: Props) => {
  const [showFiltros, setShowFiltros] = useState(false)
  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   currentPage: 1,
  //   inmueblesPerPage: 6,
  // });
  // const [listData, setListData] = React.useState<Inmueble[]>([]);
  // const auth = useAuth();
  // const apiService = new ApiService(auth.token);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await apiService.get('/api/inmuebles/');
  //       const inmueblesData: Inmueble[] = response.map((item: any) => ({
  //         id: item.id,
  //         nombre: item.nombre,
  //         precio: item.precio,
  //       }));
  //       setListData(inmueblesData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handlePageChange = (direction: 'next' | 'prev') => {
  //   if (direction === 'next') {
  //     setPagination((prevPagination) => ({
  //       ...prevPagination,
  //       currentPage: prevPagination.currentPage + 1,
  //     }));
  //   } else {
  //     setPagination((prevPagination) => ({
  //       ...prevPagination,
  //       currentPage: prevPagination.currentPage - 1,
  //     }));
  //   }
  // };

  // const indexOfLastInmueble = pagination.currentPage * pagination.inmueblesPerPage;
  // const indexOfFirstInmueble = indexOfLastInmueble - pagination.inmueblesPerPage;
  //// const currentInmuebles = listData.slice(indexOfFirstInmueble, indexOfLastInmueble);
  
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
          onClick={() => {
            actualPage.end === 1 ? setActualPage({
              start: 0,
              end: actualPage.end
            }) : setActualPage({
              start: actualPage.start - 1,
              end: actualPage.end - 1
            })
          }}>
          <CiCircleChevRight className="icono-pequeno" />
        </button>
        <button
          className="button_flecha"
          onClick={() => {
            actualPage.end === allPages ? setActualPage(actualPage) : setActualPage({
              start: actualPage.start + 1,
              end: actualPage.end + 1
            })
          }}
        >
          <CiCircleChevRight className="icono-pequeno2" />
        </button>
      </div>
      {showFiltros && <Filtros cerrar={handleCerrar}/>}
    </div>
  );
};

export default Filtrado;