
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from "@/services/apiCalls.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faKey, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './LoginStyle.css';

const Inicio: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const apiService = new ApiService('https://api.example.com');

  const handleVerification = async () => {
    try {
      const userData = await apiService.get(`/user?username=${username}&password=${password}`);
      console.log('User data:', userData); // algo con los datos aquí
      // Si el usuario está verificado con éxito, se navega a la ruta Home
      navigate("/principal");
    
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  return (
    <>
      <div className="General_container">
        <div className="panel_login">
          <div className="grid-el login-image">
            <div className="login-content-logo">
              <img src="./src/assets/logogid.png" width={"180px"} alt="logo" />
            </div>
          </div>
          <div className="grid-el login-content">
            <div className="login-content-form">
              <label htmlFor="email">Username</label>
              <div className="input-with-icon">
                <input type="email-login" name="email" id="email-login" value={username} onChange={(e) => setUsername(e.target.value)}  />
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              
              <label htmlFor="passw">Password</label>
              <div className="input-with-icon">
                <input type="password" name="passw" value={password} onChange={(e) => setPassword(e.target.value)} id="passw-login"  />
                <FontAwesomeIcon icon={faKey} className="input-icon" />
              </div>
              <input type="submit" value="Log In" onClick={handleVerification} id="submit-login" />
            </div>
            <p style={{ textAlign: "center", marginBottom: "25px" }}>
              <Link to={'/signup'}>Crear una cuenta</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;