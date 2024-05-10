import './Card_index.css'
import { useNavigate } from 'react-router-dom';

interface CardProps {
  data: {
    id: number;
    precio: number;
    nombre: string;
  };
}

function Card({ data }: CardProps) {
  const {id, precio, nombre } = data;
  const navigate = useNavigate();

  const handle = () =>{
    navigate(`/caracteristica/${id}`)
  }

  return (
    <div className="card" onClick={handle}>
      <img className="card__imagen" src="https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg"/>
      <div className="card-details">
        <p className='card__costo'>$ {precio.toLocaleString()}</p>
        <h2 className='card__titulo'>{nombre}</h2>
      </div>
    </div>
  );
}

export default Card;