import { useSelect } from "@/Context/Context";
import Spinner from '../Spinner/Spinner';
import './Favorites.css'
import Card from '../Principal/Card/Card';
import { TbMoodSad } from "react-icons/tb";

const Favorites = () => {
    const { selectedFavorites } = useSelect()

    if (!selectedFavorites.length) {
        return (
          <div className="spinner__container">
            <Spinner/> 
          </div>
        )
    }
    const cantidadCoincidentes = selectedFavorites.filter(card => card.selected === true).length;

    return (
      <div className="favorite__container">
        <h2 className='favorite__titulo'>Mis Favoritos</h2>
        {cantidadCoincidentes > 0 && (
          <div className="card-list">
            {selectedFavorites.filter(card => card.selected === true).map((card) => (
              <Card key={card.id} data={card} favorite={true}/>
            ))}
          </div>
        )}
        {cantidadCoincidentes === 0 && (
          <div className="favorite__zero">
            <TbMoodSad />
            <p className="zero-titulo">No hay Favoritos</p>
          </div>
        )}
        
      </div>
    );
}
  
export default Favorites;