import './Caracteristicas.css';

function Caracteristicas({ data }) {

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



  return (
    <div className="caracteristicas__container">
      <div className="caracteristicas__informacion">
        <h2 className='info__titulo'>Barrio</h2>
        <h3 className='info__subtitulo'>Ciudad, departamento</h3>
      </div>
      <div className="container__imagenes">
        <img className="imagen_1" src="/src/assets/HousesTest/casa1.jpg" alt="" />
        <img className="imagen_2" src="/src/assets/HousesTest/casa2.jpg" alt="" />
        <img className="imagen_3" src="/src/assets/HousesTest/casa3.jpg" alt="" />
        <img className="imagen_4" src="/src/assets/HousesTest/casa4.jpg" alt="" />
        <img className="imagen_5" src="/src/assets/HousesTest/casa4.jpg" alt="" />
      </div>
      <div className="caracteristicas__infoImagen-titulo">
        Casa en venta | Usada
      </div>
      <div className="container">
        <div className="container__descripcion">
          <h3 className="descripcion__titulo">Descripcion</h3>
          <p className='descripcion__parrafo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt nemo, doloremque voluptatem omnis atque illum magnam laudantium mollitia nostrum earum. Eveniet, officia. Ea vero commodi odit laborum itaque sunt.</p>
        </div>
        <div className="container__elementos">
          {applicants.map(function (data) {
            return (
              <div>
                {data.work}
              </div>
            )
          })}
        </div>
      </div>
      <div className="container__datos">
        <h3 className="datos__titulo">Datos principales del inmueble</h3>
        <div className="datos__info">
          {applicants.map(function (data) {
            return (
              <div>
                <h4 className='titulo-caracteristica'>{data.work}</h4>
                <h4 className='dato-caracteristica'>{data.name}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
