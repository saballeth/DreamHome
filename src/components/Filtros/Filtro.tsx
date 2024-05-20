import './filtros.css'; 

const Filtros: React.FC = () => {
    return (
        <div className="filtro-body">
            {/* TIPO DE ALOJAMIENTO */}
            <div>
                <h3>Tipo de alojamiento</h3>
                <div className="kind-of-houses">
                    <div className="kind-of-house kind-of-house--house">
                        <img className="kind-of-house__img" src="./CASITA logo" alt="Kind of house logo" />
                        <p className="kind-of-house__text">Casa</p>
                    </div>
                    <div className="kind-of-house kind-of-house--apartment">
                        <img className="kind-of-house__img" src="./b8c07826c517b2acde8e31979b7a0529-icono-de-apartamento-alto.webp" alt="Kind of apartment logo" />
                        <p className="kind-of-house__text">Apartamento</p>
                    </div>
                </div>
            </div>

            {/* POR PRECIO Y POR BAÑOS Y HABITACIONES */}
            {/* POR PRECIO */}
            {/* FIN POR PRECIO */}

            {/* POR BAÑOS Y HABITACIONES */}
            <div>
                <h3>Habitaciones y baños</h3>
                <img className="" src="./En_construccion.jpg" style={{ width: '50%', height: '400px' }} alt="" />
                <div className="bath-room-div">
                    <ul className="room-ul">
                        <p className="room-text">Habitaciones</p>
                        <div className="room-img">
                            {/* Imágenes de habitaciones */}
                        </div>
                    </ul>
                    <ul className="room-ul">
                        <p className="room-text">Baños</p>
                        <div className="room-img">
                            {/* Imágenes de baños */}
                        </div>
                    </ul>
                </div>
            </div>
            {/* FIN POR BAÑOS Y HABITACIONES */}

            {/* Caracteristicas */}
            <div className="align-characteristics">
                <div>
                    <h3>Caracteristicas</h3>
                </div>
                <div>
                    <h4>Interior</h4>
                    <button id="search-button">Estoy buscando...</button>
                    {/* Menú interior */}
                </div>
                <div>
                    <h4>Exterior</h4>
                    <button id="search-button-2">Estoy buscando...</button>
                    {/* Menú exterior */}
                </div>
                <div className="chara-object3">
                    <h4 className="chara-text">Sector</h4>
                    <button className="chara-buttom" id="search-button-3">Estoy buscando...</button>
                    {/* Menú de sector */}
                </div>
            </div>
        </div>
    );
}

export default Filtros;
