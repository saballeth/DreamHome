import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Header from "@/components/Header/Header";
import "./CreateAccount.styles.css";
import ApiService from "@/apiCalls.service/apiCalls.service";


const CreateAccount: React.FC = () =>  {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastName: "",
    age: "",
    username: "",
    password: "",
    repeatPassword: ""
  });

  const apiService = new ApiService('https://arqui-sistema-recomendacion-85b7038cdf33.herokuapp.com/api/register/');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
// pa lo del backend
const handleSubmit = async () => {
  try {
    const response = await apiService.post('https://arqui-sistema-recomendacion-85b7038cdf33.herokuapp.com/api/register/',{ 
      email: formData.email,
      name: formData.name,
      lastName: formData.lastName,
      age: formData.age,
      username: formData.username,
      password: formData.password
  });
    console.log('Registro exitoso:', response);
    navigate("/principal");
  } catch (error) {
    console.error('Error en el registro:', error);
  }
};
// fin pa lo del backend
  return (
    <div className="CreateAccount">
      <Header />

      <div className="CreateAccount-container">
        <div className="CreateAccount-container__title">
          <h1>Bienvenido</h1>
          <p>
            Cree su propia <strong>Cuenta</strong>
          </p>
        </div>
        <form className="CreateAccount-container__form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="CreateAccount-container__form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="CreateAccount-container__form-columns">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="CreateAccount-container__form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="CreateAccount-container__form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="number"
            name="age"
            placeholder="Edad"
            className="CreateAccount-container__form-input"
            value={formData.age}
            onChange={handleChange}
            min={"8"}
            max={"130"}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            className="CreateAccount-container__form-input"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <div className="CreateAccount-container__form-columns">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="CreateAccount-container__form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repetir contraseña"
              className="CreateAccount-container__form-input"
              value={formData.repeatPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="CreateAccount-container__form-buttom">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
