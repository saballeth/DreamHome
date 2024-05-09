import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Función para obtener el valor almacenado en el almacenamiento local
  const getStoredValue = () => {
    try {
      const storedValue = localStorage.getItem(key);
      // Si no hay valor almacenado, devuelve el valor inicial
      if (storedValue === null) return initialValue;
      // Parsea el valor almacenado como JSON
      return JSON.parse(storedValue);
    } catch (error) {
      // Si ocurre un error, devuelve el valor inicial
      console.error("Error getting stored value:", error);
      return initialValue;
    }
  };

  // Define el estado local con el valor inicial o el valor almacenado
  const [value, setValue] = useState(getStoredValue);

  // Función para actualizar el valor y almacenarlo en el almacenamiento local
  const updateValue = (newValue) => {
    try {
      // Si newValue es una función, la ejecuta para obtener el nuevo valor
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
      // Almacena el valor en el almacenamiento local como JSON
      localStorage.setItem(key, JSON.stringify(valueToStore));
      // Actualiza el estado local
      setValue(valueToStore);
    } catch (error) {
      console.error("Error updating stored value:", error);
    }
  };

  // Devuelve el estado y la función para actualizar el valor
  return [value, updateValue];
}

export default useLocalStorage;
