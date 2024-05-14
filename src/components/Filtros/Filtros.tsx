import './Filtros.css'
import { PiHouse } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import PrecioSelector from './PriceSelector/PriceSelector'
import { SetStateAction, useEffect, useState } from 'react';
import MenuItem from './MenuItem/MenuItem';
import FilterSelect from './FilterSelect/FilterSelect';
import { FaXmark } from "react-icons/fa6";
import { useSelect } from '@/Context/Context';

const Filtros = ({ cerrar }: { cerrar: any }) => {
    const [selectedRangePrice, setSelectedRangePrice] = useState({ minValue: 100000, maxValue: 520000000 });
    const [filtros, setLFiltros] = useState({ alojamientoA: false, alojamientoB: false, minPrecio: 100000, maxPrecio: 520000000, habitaciones: 'cualquiera', baños: 'cualquiera', parqueaderos: 'cualquiera', interiores: [], exteriores: [], sectores: [], zonas_comunes: [] });
    const { setFiltros,setFiltroSave } = useSelect()

    const handleChangePrice = (priceRange: SetStateAction<{ minValue: number; maxValue: number; }>) => {
        setSelectedRangePrice(priceRange);
    };

    const handleHabitaciones = (texto: string) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            habitaciones: texto,
        }));
    }

    const handleBanos = (texto: string) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            baños: texto,
        }));
    }

    const handleParqueaderos = (texto: string) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            parqueaderos: texto,
        }));
    }

    const handleOptionsInteriores = (lista: []) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            interiores: lista
        }));
    }

    const handleOptionsExteriores = (lista: []) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            exteriores: lista
        }));
    }

    const handleOptionsSectores = (lista: []) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            sectores: lista
        }));
    }

    const handleOptionsZonas = (lista: []) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            zonas_comunes: lista
        }));
    }

    const lista = ["1", "2", "3", "4", "5", "6", "7+"];

    const handleSave = () => {
        const maxValue = selectedRangePrice.maxValue;
        const minValue = selectedRangePrice.minValue;
        setLFiltros(prevItems => ({
            ...prevItems,
            alojamientoA: prevItems.alojamientoA,
            alojamientoB: prevItems.alojamientoB,
            minPrecio: minValue,
            maxPrecio: maxValue,
            baños: prevItems.baños,
            habitaciones: prevItems.habitaciones,
            parqueaderos: prevItems.parqueaderos,
            exteriores: prevItems.exteriores,
            interiores: prevItems.interiores,
            sectores: prevItems.sectores,
            zonas_comunes: prevItems.zonas_comunes
        }));
    }

    useEffect(()=>{
        setFiltros(filtros);
        setFiltroSave((prev: any) => !prev);
    },[filtros])

    const handleAlojamiento = (type: string) => {
        setLFiltros(prevItems => ({
            ...prevItems,
            alojamientoA: type === 'A' ? !prevItems.alojamientoA : prevItems.alojamientoA,
            alojamientoB: type === 'B' ? !prevItems.alojamientoB : prevItems.alojamientoB
        }));
    }

    const handleCerrar = () => {
        setFiltroSave(false);
        cerrar(true);
    }

    return (
        <div className="filtros__container">
            <div className="filtros-top">
                <FaXmark className='top-icon' onClick={handleCerrar} />
                <h3 className='filtros-titulo'>Filtros</h3>
            </div>
            <div className="filtros__content">
                <div className="content__alojamiento">
                    <h3 className="alojamiento-titulo">Tipo de alojamiento</h3>
                    <div className="alojamiento-card">
                        <div className={`card-alojamiento ${filtros.alojamientoA ? 'selectedA' : ''}`} onClick={() => handleAlojamiento('A')}>
                            <PiHouse className='card__icon' />
                            <p className="card__texto">Casa</p>
                        </div>
                        <div className={`card-alojamiento ${filtros.alojamientoB ? 'selectedB' : ''}`} onClick={() => handleAlojamiento('B')}>
                            <HiOutlineBuildingOffice2 className='card__icon' />
                            <p className="card__texto">Apartamento</p>
                        </div>
                    </div>
                </div>
                <div className="content__precio">
                    <h3 className="precio-titulo">Rango de precios</h3>
                    <div className="precios">
                        <PrecioSelector
                            min={100000}
                            max={520000000}
                            onChange={handleChangePrice}
                            selectedRangePrice={selectedRangePrice}
                        />
                    </div>
                </div>
                <div className="content__items">
                    <div className="content__habitaciones">
                        <h3 className="habitaciones-titulo">Habitaciones</h3>
                        <div className="habitaciones">
                            <MenuItem texto={"Cualquiera"} onClick={handleHabitaciones} />
                            {lista.map((item, index) => (
                                <MenuItem key={`key1-${index}`} onClick={handleHabitaciones} texto={item} />
                            ))}
                        </div>
                    </div>
                    <div className="content__banos">
                        <h3 className="banos-titulo">Baños</h3>
                        <div className="banos">
                            <MenuItem texto={"Cualquiera"} onClick={handleBanos} />
                            {lista.map((item, index) => (
                                <MenuItem key={`key2-${index}`} texto={item} onClick={handleBanos} />
                            ))}
                        </div>
                    </div>
                    <div className="content__parqueadero">
                        <h3 className="parqueadero-titulo">Parqueaderos</h3>
                        <div className="parqueaderos">
                            <MenuItem texto={"Cualquiera"} onClick={handleParqueaderos} />
                            {lista.map((item, index) => (
                                <MenuItem key={`key3-${index}`} texto={item} onClick={handleParqueaderos} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="caracteristicas">
                    <h3 className="caracteristicas__titulo">Caracteristicas</h3>
                    <div className="interiores">
                        <h3 className='caracteristicas__subtitulo'>Interiores</h3>
                        <FilterSelect save={handleOptionsInteriores} option={"interior"} />
                    </div>
                    <div className="exterior">
                        <h3 className='caracteristicas__subtitulo'>Exteriores</h3>
                        <FilterSelect save={handleOptionsExteriores} option={"exterior"} />
                    </div>
                    <div className="sector">
                        <h3 className='caracteristicas__subtitulo'>Sectores</h3>
                        <FilterSelect save={handleOptionsSectores} option={"sector"} />
                    </div>
                    <div className="zona-comun">
                        <h3 className='caracteristicas__subtitulo'>Zonas comunes</h3>
                        <FilterSelect save={handleOptionsZonas} option={"zona_comun"} />
                    </div>
                </div>
            </div>
            <div className="guardado__content">
                <div className="guardado__delete">Quitar Todos</div>
                <div className="guardado__mostrar" onClick={handleSave}>
                    <div className="mostrar">Mostrar</div>
                </div>
            </div>
        </div>
    )
}

export default Filtros
