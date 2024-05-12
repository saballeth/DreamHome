import './Filtros.css'
import { PiHouse } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import PrecioSelector from './PriceSelector/PriceSelector'
import { SetStateAction, useState } from 'react';
import MenuItem from './MenuItem/MenuItem';

const Filtros = () => {
    const [selectedRangePrice, setSelectedRangePrice] = useState({ minValue: 1000000, maxValue: 320000000 });

    const handleChangePrice = (priceRange: SetStateAction<{ minValue: number; maxValue: number; }>) => {
        setSelectedRangePrice(priceRange);
    };

    const lista = ["1", "2", "3", "4", "5", "6", "7+"];

    return (
        <div className="filtros__container">
            <div className="filtros__content">
                <div className="content__alojamiento">
                    <h3 className="alojamiento-titulo">Tipo de alojamiento</h3>
                    <div className="alojamiento-card">
                        <div className='card-alojamiento'>
                            <PiHouse className='card__icon' />
                            <p className="card__texto">Casa</p>
                        </div>
                        <div className='card-alojamiento'>
                            <HiOutlineBuildingOffice2 className='card__icon' />
                            <p className="card__texto">Apartamento</p>
                        </div>
                    </div>
                </div>
                <div className="content__precio">
                    <h3 className="precio-titulo">Rango de precios</h3>
                    <div className="precios">
                        <PrecioSelector
                            min={1000000}
                            max={320000000}
                            onChange={handleChangePrice}
                            selectedRangePrice={selectedRangePrice}
                        />
                    </div>
                </div>
                <div className="content__items">
                    <div className="content__habitaciones">
                        <h3 className="habitaciones-titulo">Habitaciones</h3>
                        <div className="habitaciones">
                            <MenuItem texto={"Cualquiera"} />
                            {lista.map(item => (
                                <MenuItem texto={item} />
                            ))}
                        </div>
                    </div>
                    <div className="content__banos">
                        <h3 className="banos-titulo">Baños</h3>
                        <div className="banos">
                            <MenuItem texto={"Cualquiera"} />
                            {lista.map(item => (
                                <MenuItem texto={item} />
                            ))}
                        </div>
                    </div>
                    <div className="content__parqueadero">
                        <h3 className="parqueadero-titulo">Parqueaderos</h3>
                        <div className="parqueaderos">
                            <MenuItem texto={"Cualquiera"} />
                            {lista.map(item => (
                                <MenuItem texto={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="caracteristicas">
                    <h3 className="caracteristicas__titulo">Caracteristicas</h3>
                    <div className="interiores"></div>
                    <div className="exterior"></div>
                    <div className="sector"></div>
                    <div className="zona-comun"></div>
                </div>
            </div>
        </div>
    )
}

export default Filtros