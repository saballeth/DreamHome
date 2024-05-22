import { useSelect } from "@/Context/Context";
import Spinner from '../Spinner/Spinner';
import './Favorites.css'
import Card from '../Principal/Card/Card';
import { TbMoodSad } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import ApiService from "@/apiCalls.service/apiCalls.service";

const Favorites = () => {
  const { isFavoriteSave,selectedFavorites,favoritosDB } = useSelect();
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth();
  const apiService = new ApiService(auth.token);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        for (const item of selectedFavorites) {
          if (!favoritosDB.some((value:any) => value.inmueble.idInmueble === item.idInmueble)) {
            const response = await apiService.post('/api/inmueblesPorUsuario/', {
              usuario: auth.user.username,
              inmueble: item.url,
              favorito: item.selected,
              calificacion: null,
              clasificacion: null,
              comentarios: null,
              numeroDeClicks: null
            });
            if (response) {
              console.log(response)
            }
          } 
          else {
            const indiceInmueblePorUsuarioDB = favoritosDB.findIndex((item:any) => item.idInmueble === item.idInmueble);
            const idInmueblePorUsuario = favoritosDB[indiceInmueblePorUsuarioDB].idInmueblePorUsuario;
            const response = await apiService.update(`/api/inmueblesPorUsuario/${idInmueblePorUsuario}/`, {
              usuario: auth.user.username,
              inmueble: item.url,
              favorite: item.selected,
            });
            if (response) {
              console.log(response)
            }
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isFavoriteSave]);

  useEffect(() => {
    localStorage.setItem("inmueblePorUsuario", JSON.stringify(auth.inmueblePorUsuario));
  }, [auth.inmueblePorUsuario]);
  
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
            <Card key={card.idInmueble} data={card} favorite={true} />
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
