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

  const apiService = new ApiService('http://127.0.0.1:8000/');

  const handleVerification = async () => {
    try {
      const userData = await apiService.post('/api/login/',{
        username: username,
        password: password
      });
      console.log('User data:', userData); // algo con los datos aquí
      // Si el usuario está verificado con éxito, se navega a la ruta Home
      navigate("/principal");
    
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  return (
    <>
      <div className="login_hero">
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
              <input type="email" name="email" id="email-login" value={username} onChange={(e) => setUsername(e.target.value)} style={{ paddingRight: "35px", width: "calc(100% - 19px)" }} />
                <FontAwesomeIcon icon={faCircleUser} className="input-icon" style={{ position: "absolute", top: "50%", right: "20px" }} />
              </div>
              <label htmlFor="passw">Password</label>
              <div className="input-with-icon">
                <input type="password" name="passw" value={password} onChange={(e) => setPassword(e.target.value)} id="passw-login" style={{ paddingRight: "35px", width: "calc(100% - 19px)" }} />
                <FontAwesomeIcon icon={faKey} className="input-icon" style={{ position: "absolute", top: "50%", right: "20px" }} />
              </div>
              <input type="submit" value="Log In" onClick={handleVerification} id="submit-login" style={{ marginTop: "2px", padding: "5px", width: "120px" }} />
            </div>
            <p style={{ textAlign: "center", marginBottom: "25px" }}>
            New over here? <Link to={'/signup'}>Create an account!</Link>
            </p>
           </div>
           
        </div>
      </div>
    </>
  );
};

export default Inicio;