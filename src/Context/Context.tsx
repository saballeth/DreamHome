import React, {createContext, useState, useContext} from "react";

interface ContextProps {
    selectUbi: null | any;
    setSelectUbi: any;
}

const Context = createContext<ContextProps | undefined >(undefined);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectUbi, setSelectUbi] = useState(null);

    return (
        <Context.Provider value={{ selectUbi, setSelectUbi}}>
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