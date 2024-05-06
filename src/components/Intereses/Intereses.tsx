import React, { useState } from 'react';
import InterestCard from '../InteresesCard/InteresesCard';
import Interests from '../../data/Interests.json';
import './Intereses.css';
import { useNavigate } from 'react-router-dom';


interface Interest {
  nombre: string;
}

function Interest() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterest = (interestName: string) => {
    setSelectedInterests((prevInterests) => [...prevInterests, interestName]);
  };

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerification = async () => {
    try {

      navigate("/principal");

    } catch (error) {
      console.error('Error:', error);

      setTimeout(() => {
        setError('');
      }, 3000);

    }
  };

  return (
    <div className="container">
      <div className='interest-container'>
        <div className="interest-panel">
          {Interests.intereses.map((interest: Interest, index: number) => (
            <InterestCard key={index} name={interest.nombre} handleInterest={handleInterest} />
          ))}
        </div>
        <div className="button-guardar">
          <input type="submit" value="Guardar" onClick={handleVerification} id="save-interest" />
        </div>
      </div>
    </div>
  );
}

export const InteresesPage = () => (
  <Stack>
    <CustomCheckboxButtons />
  </Stack>
);
