import { useSelect } from '@/Context/Context';
import './InfoPerfil.css'
import { useAuth } from '@/Context/AuthContext';
import Arbol from '@/components/Animaciones/Arbol/Arbol'

const InfoPerfil = () => {
    const { selectedFavorites } = useSelect();
    const auth = useAuth();

    
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="contenedor__info">
            <div className="info">
                <div className="info__descripcion-perfil">
                    <h4 className="info__titulo">Perfil de Usuario</h4>
                    <h5 className="info__subtitulo">Sobre mi </h5>
                    <p className="info__parrafo">Soy {capitalizeFirstLetter(auth.user.nombre)} {capitalizeFirstLetter(auth.user.apellido)}, tengo {auth.user.edad} años.</p>
                </div>
                <div className="info__animacion">
                    <Arbol/>
                </div>
            </div>
            <div className="actividad">
                <h4 className="actividad__titulo info__titulo">Actividad Reciente</h4>
                <div className="actividades__info">
                    {selectedFavorites.map((item, index) => {
                        console.log(selectedFavorites)
                        return (
                            <p key={index} className={`actividad__info ${!item.selected ? 'selected__info' : ''}`}>{item.selected === true ? 'Añadido a' : 'Borrado de'} Favoritos el Inmueble {item.nombre}</p>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default InfoPerfil;