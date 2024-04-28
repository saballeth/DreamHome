import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
  const [getData, setGetData] = useState<any>(null);
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    // Función para realizar la solicitud GET
    const fetchData = async () => {
      try {
        const response = await axios.get('https://arqui-sistema-recomendacion-85b7038cdf33.herokuapp.com/');
        setGetData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Función para realizar la solicitud POST
  const postDataFunction = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/', {
        // Datos que deseas enviar en el cuerpo de la solicitud POST
        key: 'value',
      });
      setPostData(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>MyComponent</h1>
      {/* Mostrar los datos obtenidos de la solicitud GET */}
      {getData ? (
        <div>
          <h2>GET Data:</h2>
          <p>{JSON.stringify(getData)}</p>
        </div>
      ) : (
        <p>Loading GET data...</p>
      )}

      {/* Botón para realizar la solicitud POST */}
      <button onClick={postDataFunction}>Send POST Request</button>

      {/* Mostrar los datos obtenidos de la solicitud POST */}
      {postData && (
        <div>
          <h2>POST Data:</h2>
          <p>{JSON.stringify(postData)}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;