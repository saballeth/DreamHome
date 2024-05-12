import './Filtros.css'
import { PiHouse } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import PrecioSelector from './PriceSelector/PriceSelector'
import { SetStateAction, useState } from 'react';

const Filtros = () => {
    const [selectedRangePrice, setSelectedRangePrice] = useState({ minValue: 0, maxValue: 100 });

    const handleChangePrice = (priceRange: SetStateAction<{ minValue: number; maxValue: number; }>) => {
        setSelectedRangePrice(priceRange);
    };

    return (
        <div className="filtros__container">
            <div className="filtros__content">
                <div className="content__alojamiento">
                    <h3 className="alojamiento-titulo">Tipo de alojamiento</h3>
                    <div className="alojamiento-card">
                        <div className='card-alojamiento'>
                            <PiHouse className='card__icon'/>
                            <p className="card__texto">Casa</p>
                        </div>
                        <div className='card-alojamiento'>
                            <HiOutlineBuildingOffice2 className='card__icon'/>
                            <p className="card__texto">Apartamento</p>
                        </div>
                    </div>
                </div>
                <div className="content__precio">
                    <h3 className="precio-titulo">Rango de precios</h3>
                    <div className="precios">
                        <PrecioSelector
                            min={0} 
                            max={100} 
                            onChange={handleChangePrice} 
                            selectedRangePrice={selectedRangePrice}
                        />
                    </div>
                </div>
                <div className="content__habitaciones">
                    <h3 className="habitaciones-titulo">Habitaciones y baños</h3>
                    <div className="habitaciones"></div>
                    <div className="ban"></div>
                </div>
                <div className="caracteristicas">
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