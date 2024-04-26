import React from 'react';
import './Service.css'; 
const ServicesPage: React.FC = () => {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deja Todo en Nuestras Manos</title>
      </head>
      <body className='Service_body'>

        
        <div className="Service_container">
          <div className="Service_text-container">
            <h1 className="Service_body-main-text ">
              Deja <br /> <span className="Service_bold-text"> Todo</span> <br /> en Nuestras manos
            </h1>
            <p className="Service_sub-text">
              Según su preferencia, recomendamos las mejores propiedades de sitios como metrocuadrado y booking
            </p>

            <br />
            <div className="Service_button-container">
              <a href="#" className="Service_orange-button">
               <strong className='hundred'>+1000</strong>  <br /> casas
              </a>
            </div>
          </div>

          <div className="Service_img-container">
            <img src=".\src\assets\PdescImage.png" alt="Image" />
          </div>
        </div>
      </body>
    </html>
  );
};

export default ServicesPage;