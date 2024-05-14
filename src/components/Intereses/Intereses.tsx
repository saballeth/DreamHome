import InterestCard from '../InteresesCard/InteresesCard';
import Interests from '../../data/Interests.json';
import './Intereses.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ApiService from '@/apiCalls.service/apiCalls.service';
import { useAuth } from '@/Context/AuthContext';


interface Intereses {
  nombre: string;
}
const Interesespage: React.FC = () =>{
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();
  const apiService = new ApiService(auth.token);

  const handleInterest = (interestName: string) => {
    const isInterestSelected = selectedInterests.includes(interestName);
    if (isInterestSelected) {
      setSelectedInterests(prevInterests =>
        prevInterests.filter(interest => interest !== interestName)
      );
    } else {
      setSelectedInterests(prevInterests => [...prevInterests, interestName]);
    }
  };

  const handleVerification = async () => {
    try {
      for (const interest of selectedInterests) {
        const response = await apiService.post('/api/interesesPorUsuario/', {
          interes: interest,
          usuario: auth.user.username,
        }); 
      }
      navigate("/principal");
    } catch (error) {
      console.error('Error:', error);
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  console.log(selectedInterests)

  return (
    <div className="container__principal">
      <div className="intereses__titulo">Bienvenido a DreamHome, Ingresa tus preferencias.</div>
      <div className='interest-container'>
        <div className="interest-panel">
          {Interests.intereses.map((interest: Intereses, index: number) => (
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
export default Interesespage
