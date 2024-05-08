import  { useState } from 'react';
import CardList from '../Principal/CardList/CardList';
import './Caracteristicas.css';

type onSelectPropertyType = (property: PropertyType) => void;

function Caracteristicas({data}){

  const [properties, setProperties] = useState<PropertyType[]>([]);
  
  const [selectedProperty, setSelectedProperty] = useState<PropertyType | null>(null);
  
  const handleSelectProperty: onSelectPropertyType = (property) => {
    setSelectedProperty(property);
  };
   
  return (
    <div className="Caracteristicas-container">
      <h2>Características Detalladas</h2>
      {selectedProperty ? (
        <div>
          <p>Barrio: {selectedProperty.place}</p>
          <p>Costo: {selectedProperty.cost}</p>
          
          <button onClick={() => setSelectedProperty(null)}>Volver</button>
        </div>
      ) : (
        <CardList onSelectProperty={handleSelectProperty}/>
      )}
    </div>
  );
};

export default Caracteristicas;
