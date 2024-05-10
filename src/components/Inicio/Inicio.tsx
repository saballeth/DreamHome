import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faKey, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './LoginStyle.css';
import { useAuth } from '@/Context/AuthContext';

const Inicio: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []); 


  const handleVerification = async () => {
    if (username !== "" && password !== "") {
      const data = {username,password}
      auth.loginUser(data);
    }else{
      alert("Ingrese un usuario y/o contraseña");
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
              <label htmlFor="email">Nombre de usuario</label>
              <div className="input-with-icon">
              <input type="email" name="email" id="email-login" value={username} onChange={(e) => setUsername(e.target.value)} style={{ paddingRight: "35px", width: "calc(100% - 19px)" }} />
                <FontAwesomeIcon icon={faCircleUser} className="input-icon" style={{ position: "absolute", top: "50%", right: "20px" }} />
              </div>
              <label htmlFor="passw">Contraseña</label>
              <div className="input-with-icon">
                <input type="password" name="passw" value={password} onChange={(e) => setPassword(e.target.value)} id="passw-login" style={{ paddingRight: "35px", width: "calc(100% - 19px)" }} />
                <FontAwesomeIcon icon={faKey} className="input-icon" style={{ position: "absolute", top: "50%", right: "20px" }} />
              </div> 
              <input type="submit" value="Ingresar" onClick={handleVerification} id="submit-login" style={{ marginTop: "2px", padding: "5px", width: "120px" }} />
            </div>
            <p style={{ textAlign: "center", marginBottom: "25px" }}>
            Nuevo por aqui? <Link to={'/create-account'}>Crear una cuenta!</Link>
            </p>
           </div>
           
        </div>
      </div>
    </>
  );
};

export default Inicio;