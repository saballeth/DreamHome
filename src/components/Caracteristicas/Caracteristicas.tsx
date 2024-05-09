import './Caracteristicas.css';
import CarouselItems from '../Carousel/Carousel'
import ApiService from '@/apiCalls.service/apiCalls.service';
import { useAuth } from '@/AuthContext/AuthContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Caracteristicas() {
  const { id } = useParams();

  const applicants = [{
    name: 'Joe', work: 'freelance-developer',
    blogs: '54', websites: '32',
    hackathons: '6', location: 'morocco', id: '0',
  },
  {
    name: 'janet', work: 'fullstack-developer',
    blogs: '34', websites: '12',
    hackathons: '8', location: 'Mozambique', id: '1',
  },
  ];

  const divStyle = {
    padding: 0,
    margin: 0
  };

  interface Inmueble {
    id: number | null;
    nombre: string | null;
    precio: number | null;
    sector: any | null;
    ciudad: any | null;
    descripcion: string | null;
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

  const [inmuebleData, setData] = useState<Inmueble | null>(null)

  const auth = useAuth();
  const apiService = new ApiService(auth.token);

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
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  }, [id]);

  if (!inmuebleData) {
    return <div style={{ height: 100, }}>Loading...</div>;
  }

  const restrictedKeys = ['id', 'ciudad', 'caracteristicas', 'sector', 'descripcion', 'nombre','precionM2'];
  const keyTranslations = {
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

  return (
    <div className="caracteristicas__container">
      <div className="caracteristicas__informacion">
        <h2 className='info__titulo'>{inmuebleData?.sector?.nombre}</h2>
        <h3 className='info__subtitulo'>{inmuebleData?.ciudad?.nombre}, {inmuebleData?.ciudad?.departamento?.nombre}</h3>
      </div>
      <div className="container__imagenes">
        <CarouselItems />
      </div>

      <div className="caracteristicas__infoImagen-titulo">
        {inmuebleData?.nombre}
      </div>
      <div className="container" style={divStyle}>
        <div className="container__descripcion">
          <h3 className="descripcion__titulo">Descripcion</h3>
          <p className='descripcion__parrafo'>{inmuebleData?.descripcion}</p>
        </div>
        <div className="container__elementos">
          {/* {applicants.map(function (data) {
            return (
              <div>
                {data.work}
              </div>
            )
          })} */}
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
                <h4 className='dato-caracteristica'>{value}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
