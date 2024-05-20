import React, { createContext, useContext, useState } from 'react';

interface PaginacionContextProps {
    nextPage(data: any): void;
    prevPage(data: any): void;
    currentPage: null | any | number;
    maxPage: number;
    updateMaxPage(totalItems:any,itemsPerPage:any):void;
}

const PaginationContext = createContext<PaginacionContextProps | undefined >(undefined);

const PaginationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const nextPage = () => {
    if (currentPage < maxPage) { // Solo incrementa si no ha alcanzado la página máxima
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) { // Solo decrementa si no está en la primera página
      setCurrentPage(prevPage => prevPage - 1);
    }
  };
  const updateMaxPage = (totalItems: number, itemsPerPage: number) => {
    const maxPage = Math.ceil(totalItems / itemsPerPage);
    setMaxPage(maxPage);
  };

  return (
    <PaginationContext.Provider value={{ currentPage, nextPage, prevPage, maxPage,updateMaxPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;

export const usePagination = (): PaginacionContextProps => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error('usePagination must be used within an Provider');
    }
    return context; 
};