import React, { useState } from 'react';
import '../InteresesCard/InteresesCard.css'

interface InterestCardProps {
  name: string; // Especifica que 'name' es de tipo string
  handleInterest: (name: string) => void; // Especifica que 'handleInterest' es una función que toma un parámetro de tipo string y no devuelve nada
}

function InterestCard({ name, handleInterest }: InterestCardProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    handleInterest(name);
  };

  return (
    <div className={`interest-card ${clicked ? 'active' : ''}`} onClick={handleClick}>
      {clicked ? <span>&#10003; {name}</span> : <p>{name}</p>}
    </div>
  );
}

export default InterestCard;