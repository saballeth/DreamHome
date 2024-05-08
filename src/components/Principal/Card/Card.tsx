import Caracteristicas from '@/components/Caracteristicas/Caracteristicas';
import './Card_index.css'

function Card({data}) {
  const handle = () =>{
    console.log("Datos: ", data)
    return <Caracteristicas data={data}/>
  }

  return (
    <div className="card" onClick={handle}>
      <img className="card__imagen" src={data.imageSrc} alt={data.place} />
      <div className="card-details">
        <p className='card__costo'>$ {data.cost}</p>
        <h2 className='card__titulo'>{data.place}</h2>
      </div>
    </div>
  );
}

export default Card;