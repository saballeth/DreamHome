import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute';
import { Home } from '@/pages/Home/Index';
import AboutUs from '@/pages/About/About';
import CreateAccount from '@/components/CreateAccount/CreateAccount';
import ContactUs from '@/pages/ContactUs/ContactUs';
import Login from '@/pages/Login/Login';
import Caracteristica from '@/pages/Caracteristicas/caracteristicasInmuebles';
import Service from '@/pages/Service/Service';
import HomePrincipal from '@/pages/Principal/Principal';
import useLocalStorage from './useLocalStorage'; // Importa el hook useLocalStorage

function App() {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', false); // Usa el hook useLocalStorage para persistir el estado de autenticación

  return (
    <AuthProvider isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/create-account" element={<CreateAccount/>} />
          <PrivateRoute path="/Caracteristicas" element={<Caracteristica />} />
          <PrivateRoute path="/principal" element={<HomePrincipal />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;