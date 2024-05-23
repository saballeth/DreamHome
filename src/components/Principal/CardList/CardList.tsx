import "./CardList_index.css";
import Card from "../Card/Card";
import ApiService from "@/apiCalls.service/apiCalls.service";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import Spinner from "@/components/Spinner/Spinner";
import { useSelect } from "@/Context/Context";
import { usePagination } from "@/Context/PaginacionContext";
import { useQuery } from "@tanstack/react-query";

const fetchInmuebles = async (token: string) => {
  const apiService = new ApiService(token);
  const response = await apiService.get('/api/inmuebles/');
  return response.map((item: any) => ({
    idInmueble: item.id,
    url: item.url,
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
};

const CardList: React.FC = () => {
  const auth = useAuth();
  // const apiService = new ApiService(auth.token);
  const { selectUbi, filtros, isFiltroSave, setInmuebles } = useSelect();
  const { currentPage, updateMaxPage } = usePagination();
  const [filtrosActivos, setFiltrosActivos] = useState(false);
  const [isCardCity, setCardCity] = useState(true);
  const { data: inmuebles, isLoading } = useQuery({
    queryKey: ['inmuebles'],
    queryFn: () => fetchInmuebles(auth.token),
    staleTime: 2000 * 60 * 60, // 1 hora
  });
  // interface Inmueble {
  //   id: number;
  //   url: string;
  //   nombre: string;
  //   precio: number;
  //   ciudad: any;
  //   habitaciones: number,
  //   baños: number,
  //   parqueaderos: number,
  //   tipoDeInmueble: string,
  //   caracteristicas_interior: any,
  //   caracteristicas_exterior: any,
  //   caracteristicas_sector: any,
  //   caracteristicas_zona_comun: any,
  // }

  // const [listData, setListData] = useState<Inmueble[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await apiService.get('/api/inmuebles/');
  //       const inmueblesData: Inmueble[] = response.map((item: any) => ({
  //         idInmueble: item.id,
  //         url: item.url,
  //         nombre: item.nombre,
  //         precio: item.precio,
  //         ciudad: item.ciudad,
  //         habitaciones: item.cantidadDeHabitaciones,
  //         baños: item.cantidadDeBaños,
  //         parqueaderos: item.cantidadDeParqueaderos,
  //         tipoDeInmueble: item.tipoDeInmueble.nombre,
  //         caracteristicas_interior: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-del-interior'),
  //         caracteristicas_exterior: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-del-exterior'),
  //         caracteristicas_sector: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-del-sector'),
  //         caracteristicas_zona_comun: item.caracteristicas.filter((item: { tipoDeCaracteristica: { nombre: string; }; }) => item.tipoDeCaracteristica.nombre === 'caracteristicas-de-zona-comun'),
  //       }));
  //       setListData(inmueblesData);
  //       setInmuebles(inmueblesData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const filteredData = useMemo(() => {
    if (!inmuebles || inmuebles.length === 0) {
      return [];
    }

    const hasActiveFilters = (
      filtros.habitaciones !== 'cualquiera' ||
      filtros.minPrecio > 100000 ||
      filtros.maxPrecio < 520000000 ||
      filtros.baños !== 'cualquiera' ||
      filtros.parqueaderos !== 'cualquiera' ||
      filtros.exteriores.length !== 0 ||
      filtros.interiores.length !== 0 ||
      filtros.sectores.length !== 0 ||
      filtros.zonas_comunes.length !== 0
    );

    if (!hasActiveFilters) {
      return inmuebles;
    }

    setFiltrosActivos(true);
    let listFiltrado: any[] = inmuebles;
    if (filtros.habitaciones !== 'cualquiera') {
      listFiltrado = inmuebles.filter((item:any) => item.habitaciones == filtros.habitaciones);
    }
    if (filtros.baños !== 'cualquiera') {
      listFiltrado = listFiltrado?.filter(item => item.baños == filtros.baños);
    }
    if (filtros.parqueaderos !== 'cualquiera') {
      listFiltrado = listFiltrado?.filter(item => item.parqueaderos == filtros.parqueaderos);
    }
    if (filtros.minPrecio > 100000) {
      listFiltrado = listFiltrado?.filter(item => item.precio >= filtros.minPrecio);
    }
    if (filtros.maxPrecio < 520000000) {
      listFiltrado = listFiltrado?.filter(item => item.precio <= filtros.maxPrecio);
    }

    if (filtros.exteriores.length !== 0) {
      listFiltrado = listFiltrado?.filter(item => filtros.exteriores.every((exterior: any) => {
        return item.caracteristicas_exterior.some((itemCaracteristica: { nombre: any; }) => itemCaracteristica.nombre === exterior.nombre);
      }));
    }
    if (filtros.interiores.length !== 0) {
      listFiltrado = listFiltrado?.filter(item => filtros.interiores.every((interior: any) => {
        return item.caracteristicas_interior.some((itemCaracteristica: { nombre: any; }) => itemCaracteristica.nombre === interior.nombre);
      }));
    }
    if (filtros.sectores.length !== 0) {
      listFiltrado = listFiltrado?.filter(item => filtros.sectores.every((sectorItem: any) => {
        return item.caracteristicas_sector.some((itemCaracteristica: { nombre: any; }) => itemCaracteristica.nombre === sectorItem.nombre);
      }));
    }
    if (filtros.zonas_comunes.length !== 0) {
      listFiltrado = listFiltrado?.filter(item => filtros.zonas_comunes.every((zonaItem: any) => {
        return item.caracteristicas_zona_comun.some((itemCaracteristica: { nombre: any; }) => itemCaracteristica.nombre === zonaItem.nombre);
      }));
    }

    return listFiltrado;
  }, [inmuebles, isFiltroSave]);

  useEffect(() => {
    const hasCards = filteredData?.some((card:any) =>
      card.ciudad.nombre === selectUbi?.value
    )
    if (hasCards !== undefined) {
      setCardCity(hasCards);
    }
  }, [selectUbi, filteredData]);


  let paginatedData = filteredData;
  
  if (isCardCity) {
    paginatedData = filteredData.filter((card:any) => card.ciudad.nombre === selectUbi?.value);
  }

  const start = (currentPage - 1) * 9;
  let end = start + 9;
  if (end > paginatedData.length) {
    end = paginatedData.length;
  }

  const paginated = paginatedData.slice(start, end);
  useEffect(() => {
    updateMaxPage(paginatedData.length, 9);
  }, [paginatedData.length, updateMaxPage]);

  if (isLoading) {
    return (
      <div className="spinner__container__cardList">
        <Spinner />
      </div>
    );
  }

  return (
    <div className={`card-list wrapper ${paginated.length < 4 ? 'cards__fews' : ''}`}>
      {selectUbi === null && paginated?.map((card:any) => (
        <Card key={card.id} data={card} favorite={false} />
      ))}
      {selectUbi !== null && isCardCity && paginated?.map((card:any) => (
        <Card key={card.id} data={card} favorite={false} />
      ))}
      {selectUbi !== null && !isCardCity && (
        <div className="card__not-found">
          <p>No hay Inmuebles con la ciudad Seleccionada</p>
        </div>
      )}
      {paginated.length == 0 && filtrosActivos == true && (
        <div className="card__not-found">
          <p>No hay Inmuebles con los filtros seleccionados</p>
        </div>
      )}
    </div>
  );
};

export default CardList;
