import { useSelect } from "@/Context/Context";
import Spinner from '../Spinner/Spinner';
import './Favorites.css'
import Card from '../Principal/Card/Card';
import { TbMoodSad } from "react-icons/tb";
import { useEffect, useState } from "react";

const Favorites = () => {
  const { selectedFavorites } = useSelect()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedFavorites.length > 0) {
      setIsLoading(false);
    }
  }, [selectedFavorites]);

  if (isLoading) {
    return (
      <div className="spinner__container">
        <Spinner />
      </div>
    );
  }

  const favoriteCards: any = selectedFavorites.filter(card => card.selected === true);
  const cantidadCoincidentes = favoriteCards.length;

  return (
    <div className="favorite__container">
      <h2 className='favorite__titulo'>Mis Favoritos</h2>
      {cantidadCoincidentes > 0 ? (
        <div className="card-list">
          {selectedFavorites.filter(card => card.selected === true).map((card) => (
            <Card key={card.id} data={card} favorite={true} />
          ))}
        </div>
      ) : (
        <div className="favorite__zero">
          <TbMoodSad />
          <p className="zero-titulo">No hay Favoritos</p>
        </div>
      )}
      {/* {cantidadCoincidentes === 0 && (
          
        )} */}

    </div>
  );
}

export default Favorites;