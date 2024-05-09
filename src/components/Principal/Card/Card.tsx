import React from 'react';
import './Card_index.css';

interface CardProps {
  data: {
    id: number;
    precio: number;
    nombre: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { id, precio, nombre } = data;

  const handle = () => {
    console.log("Datos: ", data);
  };

  return (
    <div className="card" onClick={handle}>
      <img className="card__imagen" src="https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg" alt="Imagen"/>
      <div className="card-details">
        <p className='card__costo'>$ {precio}</p>
        <h2 className='card__titulo'>{nombre}</h2>
      </div>
    </div>
  );
};

export default Card;
