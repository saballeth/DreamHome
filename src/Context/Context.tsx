import React, {createContext, useState, useContext, useEffect} from "react";

type SelectedItem = {
    id: number;
    selected: boolean;
    nombre: string;
    precio: number;
};

interface DataProps{
    id: number;
    precio: number;
    nombre: string;
};

interface ContextProps {
    toggleFavorite(data: any): void;
    selectUbi: null | any;
    setSelectUbi: any;
    selectedFavorites: SelectedItem[];
    setSelectedFavorites: any;
}

const Context = createContext<ContextProps | undefined >(undefined);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectUbi, setSelectUbi] = useState(null);
    const [selectedFavorites, setSelectedFavorites] = useState<SelectedItem[]>([]);

    useEffect(() => {
        const favoritesString = localStorage.getItem('favorites');
        if (favoritesString) {
          const favorites = JSON.parse(favoritesString);
          setSelectedFavorites(favorites);
        }   
    }, []);

    const toggleFavorite = (data: DataProps) => {
        setSelectedFavorites(prevSelectedItems => {
            const itemIndex = prevSelectedItems.findIndex(item => item.id === data.id);
            if (itemIndex !== -1) {
                // Si el elemento ya está en la lista, se deselecciona
                const updatedFavorites = [...prevSelectedItems];
                updatedFavorites[itemIndex] = { ...updatedFavorites[itemIndex], selected: !updatedFavorites[itemIndex].selected };
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                return updatedFavorites;
            } else {
                // Si el elemento no está en la lista, se selecciona
                const updatedFavorites = [...prevSelectedItems, { id:data.id, selected: true, nombre:data.nombre, precio:data.precio }];
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                return updatedFavorites;
            }
        });
    };

    return (
        <Context.Provider value={{ selectUbi, toggleFavorite, setSelectUbi, selectedFavorites ,setSelectedFavorites}}>
            {children}
        </Context.Provider>
    );
}
export default Provider

// export const useSelect = () => useContext(Context)
export const useSelect = (): ContextProps => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useSelect must be used within an Provider');
    }
    return context; 
};