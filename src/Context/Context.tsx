import React, {createContext, useState, useContext, useEffect} from "react";
import { useAuth } from "./AuthContext";

type SelectedItem = {
    idInmueble: number;
    url: string;
    selected: boolean;
    nombre: string;
    precio: number;
};
  
interface DataProps{
    id: number;
    precio: number;
    url:string;
    nombre: string;
};

interface ContextProps {
    selectUbi: null | any;
    filtros: null | any;
    setSelectUbi: any;
    selectedFavorites: SelectedItem[];
    setSelectedFavorites: any;
    setFiltros: any;
    isFiltroSave: any;
    setFiltroSave: any;
    inmuebles: any;
    setInmuebles:any;
    isFavoriteSave: any;
    setFavoriteSave(data:any):void;
    isFavoritoBorrado: boolean;
    setFavoritoBorrado(data:any):void;
    itemsClics: any[];
    setItemsClics(data:any):void;
}

export const Context = createContext<ContextProps | undefined >(undefined);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectUbi, setSelectUbi] = useState(null);
    const [selectedFavorites, setSelectedFavorites] = useState<SelectedItem[]>([]);
    const [filtros, setFiltros] = useState({alojamientoA:false,alojamientoB:false,minPrecio:100000,maxPrecio:520000000, habitaciones:'cualquiera',baños:'cualquiera',parqueaderos:'cualquiera',interiores:[],exteriores: [],sectores: [],zonas_comunes: []});
    const [isFiltroSave, setFiltroSave] = useState(false);
    const [isFavoriteSave, setFavoriteSave] = useState(false);
    const [inmuebles, setInmuebles] = useState([]);
    const [isFavoritoBorrado, setFavoritoBorrado] = useState(false);
    const [itemsClics, setItemsClics] = useState(()=>{
        const clics = localStorage.getItem('itemsCountClics');
        return clics ? JSON.parse(clics) : [];
    });

    useEffect(() => {
        const favoritesString = localStorage.getItem('favoritosNuevos');
        if (favoritesString) {
            const favorites = JSON.parse(favoritesString);
            setSelectedFavorites(favorites); 
        } 
    },[]); 

    return (
        <Context.Provider value={{itemsClics, setItemsClics ,isFavoritoBorrado,setFavoritoBorrado,isFavoriteSave,setFavoriteSave,inmuebles,setInmuebles,selectUbi, filtros,isFiltroSave, setFiltroSave, setFiltros, setSelectUbi, selectedFavorites, setSelectedFavorites }}>
            {children}
        </Context.Provider>
    );
}
export default Provider

export const useSelect = (): ContextProps => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useSelect must be used within an Provider');
    }
    return context; 
};