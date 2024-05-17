import { useSelect } from "@/Context/Context";
import Spinner from '../Spinner/Spinner';
import './Favorites.css'
import Card from '../Principal/Card/Card';
import { TbMoodSad } from "react-icons/tb";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import ApiService from "@/apiCalls.service/apiCalls.service";

const Favorites = () => {
  const { isFavoriteSave,selectedFavorites } = useSelect()
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const apiService = new ApiService(auth.token)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        await Promise.all(selectedFavorites.map(async (item) => {
          await auth.saveInmueblePorUsuario(item);
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isFavoriteSave]);


  if (isLoading) {
    return (
      <div className="spinner__container">
        <Spinner />
      </div>
    );
  }

  const favoriteCards: any = selectedFavorites.filter(card => card.selected === true);
  console.log(favoriteCards)
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
    </div>
  );
}

export default Favorites;