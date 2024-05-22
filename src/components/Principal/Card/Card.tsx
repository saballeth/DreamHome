import './Card_index.css'
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useSelect } from '@/Context/Context';
import { CiSquareMinus } from "react-icons/ci";

interface CardProps {
  data:  {idInmueble: number; url: string; precio: number; nombre: string; };
  favorite:boolean;
}

function Card({ data, favorite }: any) {
  const {idInmueble, precio, nombre, url } = data;
  const navigate = useNavigate();
  const [marcadoFavorite, setMarcadoFavorite] = useState(false);
  const {setSelectedFavorites,selectedFavorites} = useSelect();
  const favoritoComponente = favorite;

  const handle = () => {
    navigate(`/caracteristica/${idInmueble}`)
  };

  const handleSelect = () => {
    const itemIndex = selectedFavorites.findIndex(item => item.idInmueble === idInmueble);
    if (itemIndex !== -1) {
      // Si la tarjeta ya está en favoritos, la deselecciona
      const updatedFavorites = selectedFavorites.filter(item => item.idInmueble !== idInmueble);
      setSelectedFavorites(updatedFavorites);
      setMarcadoFavorite(false);
    } else {
      // Si la tarjeta no está en favoritos, la selecciona
      const updatedFavorites = [...selectedFavorites, { idInmueble:idInmueble,nombre:nombre,precio:precio, selected: true }];
      setSelectedFavorites(updatedFavorites);
      setMarcadoFavorite(true);
    }
  }

  return (
    <div className="card">
      { favoritoComponente ? (
        <div className="card__delete" onClick={handleSelect}>
          <CiSquareMinus className='menos__select'/>
        </div>  
      ):(
        <div className="card__favorite" onClick={handleSelect}>
          {marcadoFavorite ? (
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
};

export default Card;
