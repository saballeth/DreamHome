import './Card_index.css'
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useSelect } from '@/Context/Context';
import { CiSquareMinus } from "react-icons/ci";
import { FaSquareMinus } from "react-icons/fa6";

interface CardProps {
  data: {
    id: number;
    precio: number;
    nombre: string;
  };
  favorite:boolean;
}

function Card({ data, favorite }: CardProps) {
  const {id, precio, nombre } = data;
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);
  const {toggleFavorite,selectedFavorites} = useSelect();

  const handle = () =>{
    navigate(`/caracteristica/${id}`)
  }

  useEffect(()=>{
    const itemIndex = selectedFavorites.findIndex(item => item.id === id);
    setFavorite(selectedFavorites[itemIndex]?.selected)
  },[id,selectedFavorites])

  const handleSelect = () => {
    toggleFavorite(data)
  };
  
  return (
    <div className="card">
      { favorite ? (
        <div className="card__delete" onClick={handleSelect}>
          {isFavorite ? (
            <CiSquareMinus className='menos__select'/>
          ):(
            <FaSquareMinus className='menos__select__false'/>
          )}
        </div>  
      ):(
        <div className="card__favorite" onClick={handleSelect}>
          {isFavorite ? (
            <MdFavorite className='favorite__select'/>
          ):(
            <MdFavoriteBorder className="favorite"/>
          )}
        </div>
      )}
      <div className="card__container" onClick={handle}>
        <img className="card__imagen" src="https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg"/>
        <div className="card-details">
          <p className='card__costo'>$ {precio.toLocaleString()}</p>
          <h2 className='card__titulo'>{nombre}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;