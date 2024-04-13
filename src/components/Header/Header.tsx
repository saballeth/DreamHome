import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.styles.css';

type loggedType = {
  logged: boolean
}

const Header: React.FC<loggedType> = ({logged}:loggedType)=>{
  return(
    <header>
    <div className="wrapper">
      <div className="header_container">
        <div>
          <h1>DreamHouse</h1>
        </div>
        <nav>
          <ul>
            {logged ? (
              <Dropdown className='dropdown-btn'>
                  <Dropdown.Toggle id="dropdown-basic">
                      <div className="dropdown-text">
                          <img src="./src/assets/account.svg" alt="user-img"/>
                      </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='dropdown-menu'>
                      <Dropdown.Item href="#">Configuración</Dropdown.Item>
                      <Dropdown.Item href="#">Cerrar Sesión</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <li>Login</li>
                <li>Acerca de</li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}


export default Header;