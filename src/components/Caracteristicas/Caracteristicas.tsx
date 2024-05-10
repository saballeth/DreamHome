import CarouselItems from '../Carousel/Carousel'
import ApiService from '@/apiCalls.service/apiCalls.service';
import { useAuth } from '@/Context/AuthContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import './Caracteristicas.css';


function Caracteristicas() {
  const { id } = useParams();
  const [inmuebleData, setData] = useState<Inmueble | null>(null)
  const auth = useAuth();
  const apiService = new ApiService(auth.token);
  const caracteristicasPorTipo: { [tipo: string]: any[] } = {};

  const divStyle = {
    padding: 0,
    margin: 0
  };

  interface Inmueble {
    id: number | null;
    nombre: string | any | null;
    precio: number | null;
    sector: any | null;
    ciudad: any | null;
    descripcion: string | any | null;
    caracteristicas: any | null;
    cantidadDeHabitaciones: any | null;
    cantidadDeParqueaderos: any | null;
    cantidadDeBaños: any | null;
    antiguedad: string | null;
    precionM2: number | null;
    valorArriendo: number | null;
    areaPrivada: string | null;
    areaConstruida: string | null;
    precioAdministracion: number | null;
    estado: any | null;
    direccion: any | null;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(`/api/inmuebles/${id}`);
        const data: Inmueble = {
          id: response.id,
          nombre: response.nombre,
          precio: response.precio,
          sector: response.sector,
          ciudad: response.ciudad,
          descripcion: response.descripcion,
          caracteristicas: response.caracteristicas,
          cantidadDeHabitaciones: response.cantidadDeHabitaciones,
          cantidadDeParqueaderos: response.cantidadDeParqueaderos,
          cantidadDeBaños: response.cantidadDeBaños,
          antiguedad: response.antiguedad,
          precionM2: response.precionM2,
          valorArriendo: response.valorArriendo,
          areaPrivada: response.areaPrivada,
          areaConstruida: response.areaConstruida,
          precioAdministracion: response.precioAdministracion,
          estado: response.estado,
          direccion: response.direccion,
        };
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  }, [id]);

  const restrictedKeys = ['id', 'ciudad', 'caracteristicas', 'sector', 'descripcion', 'nombre', 'precionM2'];
  const keyTranslations: any = {
    estrato: 'Estrato',
    cantidadDeHabitaciones: 'Habitaciones',
    cantidadDeBaños: 'Baños',
    cantidadDeParqueaderos: 'Parqueaderos',
    antiguedad: 'Antiguedad',
    precionM2: 'Precio m²',
    valorArriendo: 'Arriendo',
    areaPrivada: 'Area Privada',
    areaConstruida: 'Area Construida',
    precioAdministracion: 'Administracion',
    precio: 'Precio',
    estado: 'Estado',
    direccion: 'Direccion',
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function formatText(text: string) {
    const words = text.split("-").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return words.join(' ');
  }

  function formatNumber(key: any, value: any) {
    if (key == "precio" || key == "valorArriendo" || key == "precioAdministracion") {
      value = "$" + value.toLocaleString();
      return value
    } else {
      return value
    }
  }

  if (!inmuebleData) {
    return (
      <div className="spinner__container_caracteristica">
        <Spinner />
      </div>
    )
  }

  inmuebleData?.caracteristicas.forEach((caracteristica: any) => {
    if (!caracteristicasPorTipo[formatText(caracteristica.tipoDeCaracteristica.nombre)]) {
      caracteristicasPorTipo[formatText(caracteristica.tipoDeCaracteristica.nombre)] = [];
    }
    caracteristicasPorTipo[formatText(caracteristica.tipoDeCaracteristica.nombre)].push(formatText(caracteristica.nombre));
  });


  return (
    <div className="caracteristicas__container">
      <div className="caracteristicas__informacion">
        <h2 className='info__titulo'>{capitalizeFirstLetter(inmuebleData?.sector?.nombre)}</h2>
        <h3 className='info__subtitulo'>{capitalizeFirstLetter(inmuebleData?.ciudad?.nombre)}, {capitalizeFirstLetter(inmuebleData?.ciudad?.departamento?.nombre)}</h3>
      </div>
      <div className="container__imagenes">
        <CarouselItems />
      </div>
      <div className="caracteristicas__infoImagen-titulo">
        {capitalizeFirstLetter(inmuebleData?.nombre)}
      </div>
      <div className="container" style={divStyle}>
        <div className="container__descripcion">
          <h3 className="descripcion__titulo">Descripcion</h3>
          <p className='descripcion__parrafo'>{capitalizeFirstLetter(inmuebleData?.descripcion)}</p>
        </div>
      </div>
      <div className="container__datos">
        <h3 className="datos__titulo">Datos principales del inmueble</h3>
        <div className="datos__info">
          {inmuebleData && Object.entries(inmuebleData).filter(([key, value]) =>
            !restrictedKeys.includes(key) &&
            value !== null &&
            value !== ''
          ).map(([key, value]) => {
            return (
              <div key={key}>
                <h4 className='titulo-caracteristica'>{keyTranslations[key] || key}</h4>
                <h4 className='dato-caracteristica'>{formatNumber(key, value)}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container__elementos">
        {Object.entries(caracteristicasPorTipo).map(([tipo, caracteristicas]) => (
          <div className='elementos__tipo' key={tipo}>
            <h3>{tipo}</h3>
            <div className="elementos__caracteristicas">
              {caracteristicas.map((caracteristica: any) => (
                <div key={caracteristica} className='dato-caracteristica'>
                  {caracteristica}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caracteristicas;
