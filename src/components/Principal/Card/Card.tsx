import './Card_index.css'
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useSelect } from '@/Context/Context';
import { CiSquareMinus } from "react-icons/ci";
import ApiService from '@/apiCalls.service/apiCalls.service';
import axios from 'axios';
import { useAuth } from '@/Context/AuthContext';

interface CardProps {
  data: { idInmueble: number; url: string; precio: number; nombre: string; };
  favorite: boolean;
  token: string;
  idUsuario: number;
}

function Card({ data, favorite, token, idUsuario }: any) {
  const { idInmueble, precio, nombre, url } = data;
  const navigate = useNavigate();
  const [marcadoFavorite, setMarcadoFavorite] = useState(false);
  const { setSelectedFavorites, selectedFavorites, setFavoritoBorrado, setItemsClics,itemsClics } = useSelect();
  const favoritoComponente = favorite;

  const handle = () => {
    navigate(`/caracteristica/${idInmueble}`)
  };

  const handleClics = () => {
    const itemIndex = itemsClics?.findIndex((item:any) => item.idInmueble == idInmueble);
    if (itemIndex !== -1) {
      const updateItemClic = itemsClics.map((item:any) =>{
        if(item.idInmueble == idInmueble){
          return {...item, clics: item.clics + 1};
        }
        return item;
      });
      setItemsClics(updateItemClic);
      localStorage.setItem('itemsCountClics', JSON.stringify(updateItemClic));
    }else{
      const updateItemClic = [...itemsClics, {idInmueble: idInmueble,url: url, clics: 1}];
      setItemsClics(updateItemClic);
      localStorage.setItem('itemsCountClics', JSON.stringify(updateItemClic));
    }
  }

  const handleSelect = () => {
    const itemIndex = selectedFavorites.findIndex(item => item.idInmueble == idInmueble);
    if (itemIndex !== -1) {
      const updatedFavorites = selectedFavorites.map(item => {
        if (item.idInmueble === idInmueble) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      setSelectedFavorites(updatedFavorites);
      setMarcadoFavorite(updatedFavorites[itemIndex].selected);
    } else {
      const updatedFavorites = [...selectedFavorites, { idInmueble: idInmueble, url: url, nombre: nombre, precio: precio, selected: true }];
      setSelectedFavorites(updatedFavorites);
      setMarcadoFavorite(true);
    }
  }

  const handleSelectDelete = () => {
    const itemIndex = selectedFavorites.findIndex(item => item.idInmueble == idInmueble);
    if (itemIndex !== -1) {
      const updatedFavorites = selectedFavorites.map(item => {
        if (item.idInmueble === idInmueble) {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      setSelectedFavorites(updatedFavorites);
      setMarcadoFavorite(updatedFavorites[itemIndex].selected);
    } else {
      const updatedFavorites = [...selectedFavorites, { idInmueble: idInmueble, url: url, nombre: nombre, precio: precio, selected: true }];
      setSelectedFavorites(updatedFavorites);
      setMarcadoFavorite(true);
    }
    setFavoritoBorrado(true);
  }

  useEffect(() => {
    const index = selectedFavorites.findIndex(item => item.idInmueble === idInmueble);
    if (index !== -1 && selectedFavorites[index].selected) {
      setMarcadoFavorite(true);
    } else {
      setMarcadoFavorite(false);
    }
  }, [marcadoFavorite]);


  return (
    <div className="card" onClick={handleClics}>
      {favoritoComponente ? (
        <div className="card__delete" onClick={handleSelectDelete}>
          <CiSquareMinus className='menos__select' />
        </div>
      ) : (
        <div className="card__favorite" onClick={handleSelect}>
          {marcadoFavorite ? (
            <MdFavorite className='favorite__select' />
          ) : (
            <MdFavoriteBorder className="favorite" />
          )}
        </div>
      )}
      <div className="card__container" onClick={handle}>
        <img className="card__imagen" src="https://colombiarents.com/wp-content/uploads/2020/11/casa-santa-marta-1.jpg" />
        <div className="card-details">
          <p className='card__costo'>$ {precio.toLocaleString()}</p>
          <h2 className='card__titulo'>{nombre}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
