import './Card_index.css'

function Card({data}) {
  return (
    <div className="card">
      <img className="card__imagen" src={data.imageSrc} alt={data.place} />
      <div className="card-details">
        <p className='card__costo'>$ {data.cost}</p>
        <h2 className='card__titulo'>{data.place}</h2>
      </div>
    </div>
  );
}

export default Card;