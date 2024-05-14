import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import Spinner from "@/components/Spinner/Spinner";
import { useSelect } from "@/Context/Context";

const CardList: React.FC = () => {
  const auth = useAuth();
  const apiService = new ApiService(auth.token);
  const { selectUbi, filtros, isFiltroSave } = useSelect();

  interface Inmueble {
    id: number;
    nombre: string;
    precio: number;
    ciudad: any;
    habitaciones: number,
    baños: number,
    parqueaderos: number,
    tipoDeInmueble: string,
    caracteristicas_interior: any,
    caracteristicas_exterior: any,
    caracteristicas_sector: any,
    caracteristicas_zona_comun: any,
  }

  const [listData, setListData] = useState<Inmueble[]>([]);
  const [pageSize, setPageSize] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [isCardCity, setCardCity] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get('/api/inmuebles/');
        const inmueblesData: Inmueble[] = response.map((item: any) => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          ciudad: item.ciudad,
          habitaciones: item.cantidadDeHabitaciones,
          baños: item.cantidadDeBaños,
          parqueaderos: item.cantidadDeParqueaderos,
          tipoDeInmueble: item.tipoDeInmueble.nombre,
          caracteristicas_interior: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-del-interior'),
          caracteristicas_exterior: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-del-exterior'),
          caracteristicas_sector: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-del-sector'),
          caracteristicas_zona_comun: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-de-zona-comun'),
        }));
        setListData(inmueblesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (listData.length === 0) {
      return [];
    }

    const hasActiveFilters = (
      filtros.habitaciones !== 'cualquiera' ||
      filtros.minPrecio === 100000 ||
      filtros.maxPrecio < 520000000 ||
      filtros.baños !== 'cualquiera' ||
      filtros.parqueaderos !== 'cualquiera' ||
      filtros.exteriores.length !== 0 ||
      filtros.interiores.length !== 0 ||
      filtros.sectores.length !== 0 ||
      filtros.zonas_comunes.length !== 0
  );

  if (!hasActiveFilters) {
      console.log("No hay filtros activos. Mostrando todos los elementos.");
      return listData;
  }

  // console.log(filtros)
  let listFiltrado: any[] = listData;

  // console.log(listData)
  if (filtros.habitaciones !== 'cualquiera'){
    // console.log("hola");
    listFiltrado = listData.filter(item => item.habitaciones === filtros.habitaciones);
  }
  // console.log(listFiltrado)

  if (filtros.baños !== 'cualquiera'){
    // console.log("hola2");
    listFiltrado = listFiltrado?.filter(item => item.baños === filtros.baños);
  }
  if (filtros.parqueaderos !== 'cualquiera'){
    // console.log("hola3");
    listFiltrado = listFiltrado?.filter(item => item.parqueaderos === filtros.parqueaderos);
  }
  if (filtros.minPrecio > 100000){
    // console.log("hola4");
    listFiltrado = listFiltrado?.filter(item => item.precio >= filtros.minPrecio);
  }
  if(filtros.maxPrecio < 520000000){
    // console.log("hola5");
    listFiltrado = listFiltrado?.filter(item => item.precio <= filtros.maxPrecio);
  }
  if(filtros.exteriores.length !== 0){
    // console.log("hola6");
    listFiltrado = listFiltrado?.filter(item => filtros.exteriores.every((exteriorItem: any) => item.caracteristicas_exterior.includes(exteriorItem)))
  }
  if(filtros.interiores.length !== 0){
    // console.log("hola7");
    listFiltrado = listFiltrado?.filter(item => filtros.interiores.every((interiorItem: any) => item.caracteristicas_interior.includes(interiorItem)))
  }
  if(filtros.sectores.length !== 0){
    // console.log("hola8");
    listFiltrado = listFiltrado?.filter(item => filtros.sectores.every((sectorItem: any) => item.caracteristicas_sector.includes(sectorItem)))
  }
  if(filtros.zonas_comunes.length !== 0){
    // console.log("hola9");
    listFiltrado = listFiltrado?.filter(item => filtros.zonas_comunes.every((zonaItem: any) => item.caracteristicas_zona_comun.includes(zonaItem)))
  }

  return listFiltrado;
}, [listData, isFiltroSave]);

  // console.log(filteredData);

  useEffect(() => {
    const hasCards = filteredData?.some((card) =>
      card.ciudad.nombre === selectUbi?.value
    )
    if (hasCards !== undefined){
      setCardCity(hasCards);
    }
  }, [selectUbi, filteredData]);

  if (!listData.length) {
    return (
      <div className="spinner__container__cardList">
        <Spinner />
      </div>
    )
  }


  return (
    <div className="card-list wrapper">
      {selectUbi === null && filteredData?.map((card) => (
        <Card key={card.id} data={card} favorite={false} />
      ))}
      {selectUbi !== null && filteredData?.map((card) => (
        selectUbi.value === card.ciudad.nombre && <Card key={card.id} data={card} favorite={false} />
      ))}
      {!isCardCity && (
        <div className="card__not-found">
          <p>No hay Inmuebles con la ciudad Seleccionada</p>
        </div>
      )}
    </div>
  );
}

export default CardList;