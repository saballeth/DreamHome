import { useSelect } from "@/Context/Context";
import Spinner from '../Spinner/Spinner';
import './Favorites.css'
import Card from '../Principal/Card/Card';
import { TbMoodSad } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import ApiService from "@/apiCalls.service/apiCalls.service";

const Favorites = () => {
  const { selectedFavorites } = useSelect();
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth();
  const apiService = new ApiService(auth.token);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        for (const item of selectedFavorites) {
          const inmueblesPorUsuario = Array.isArray(auth.inmueblePorUsuario) ? auth.inmueblePorUsuario : [];
          const index = inmueblesPorUsuario.findIndex((inmueble: any) => inmueble.id === item.id);
          if (index === -1) {
            const response = await apiService.post('/api/inmueblesPorUsuario/', {
              usuario: auth.user.username,
              inmueble: item.url,
              favorito: item.selected,
              calificacion: null,
              clasificacion: null,
              comentarios: null,
              numeroDeClicks: null
            });
            console.log(response)
            if (response) {
              auth.setInmueblePorUsuario((prev: any[]) => [...prev, {
                idInmueblePorUsuario: response.id,
                idInmueble : item.id,
                usuario: auth.user.username,
                inmueble: response.url,
                favorito: response.favorito,
                calificacion: response.calificacion,
                clasificacion: response.clasificacion,
                comentarios: response.comentarios,
                numeroDeClicks: response.numeroDeClicks
              }]);
            }
          } 
          else {
            const idToUpdate = inmueblesPorUsuario[index].idInmueblePorUsuario;
            const response = await apiService.update(`/api/inmueblesPorUsuario/${idToUpdate}/`, {
              usuario: auth.user.username,
              inmueble: item.url,
              favorite: item.selected,
            });
            if (response) {
              auth.setInmueblePorUsuario((prev:any[]) => {
                const updated = [...prev];
                updated[index] = {
                  ...updated[index],
                  idInmueble: item.id,
                  inmueble: response.url,
                  favorito: response.favorito,
                  calificacion: response.calificacion,
                  clasificacion: response.clasificacion,
                  comentarios: response.comentarios,
                  numeroDeClicks: response.numeroDeClicks
                };
                return updated;
              });
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
  }, [selectedFavorites]);

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
