import './Card_index.css'

function Card({data}) {
  return (
    <div className="card">
      <img src={data.imageSrc} alt={data.place} />
      <div className="card-details">
        <h2>{data.place}</h2>
        <p>Costo: {data.cost}</p>
      </div>
    </div>
  );
}

export default Card;