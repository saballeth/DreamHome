import './Card_index.css'

function Card({data}) {
  return (
    <div className="card">
      <img className="card__imagen" src={data.imageSrc} />
      <div className="card-details">
        <p className='card__costo'>$ {data.precio}</p>
        <h2 className='card__titulo'>{data.nombre}</h2>
      </div>
    </div>
  );
}

export default Card;