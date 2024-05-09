import './Caracteristicas.css';
import CarouselItems from '../Carousel/Carousel'
import ApiService from '@/apiCalls.service/apiCalls.service';
import { useAuth } from '@/AuthContext/AuthContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Caracteristicas() {
  const {id} = useParams();

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
    padding:0,
    margin:0
  };

  interface Inmueble{
    id:number;
    nombre: string;
    precio: number;
    sector: any;
    ciudad: any;
    descripcion: string;
    caracteristicas: any;
  }

  const [inmuebleData, setData] = useState<Inmueble|null>(null)

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
          caracteristicas: response.caracteristicas
        };
        setData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };    

  }, [id]); 

  if (!inmuebleData) {
    return <div style={{height:100,}}>Loading...</div>;
  }

  return (
    <div className="caracteristicas__container">
      <div className="caracteristicas__informacion">
        <h2 className='info__titulo'>{inmuebleData?.sector}</h2>
        <h3 className='info__subtitulo'>Ciudad, departamento</h3>
      </div>
      <div className="container__imagenes">
        <CarouselItems/>
      </div>

      <div className="caracteristicas__infoImagen-titulo">
        Casa en venta | Usada
      </div>
      <div className="container" style={divStyle}>
        <div className="container__descripcion">
          <h3 className="descripcion__titulo">Descripcion</h3>
          <p className='descripcion__parrafo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt nemo, doloremque voluptatem omnis atque illum magnam laudantium mollitia nostrum earum. Eveniet, officia. Ea vero commodi odit laborum itaque sunt.</p>
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
          {/* {applicants.map(function (data) {
            return (
              <div>
                <h4 className='titulo-caracteristica'>{data.work}</h4>
                <h4 className='dato-caracteristica'>{data.name}</h4>
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
