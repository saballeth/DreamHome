import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/PrivateRoute/PrivateRoute';
import { Home } from '@/pages/Home/Index';
import HomeC from '@/pages/Home/HomeC';
import About from '@/pages/About/About';
import AboutC from '@/pages/About/AboutC';
import CreateAccount from '@/components/CreateAccount/CreateAccount';
import ContactUs from '@/pages/ContactUs/ContactUs';
import ContactUsC from '@/pages/ContactUs/ContactUsC';
import Login from '@/pages/Login/Login';
import Service from '@/pages/Service/Service';
import ServiceC from '@/pages/Service/ServiceC';
import HomePrincipal from '@/pages/Principal/Principal';
import Caracteristicas from '@/pages/Caracteristicas/caracteristicasInmuebles';
import Intereses from '@/pages/Intereses/Intereses';
import Favorites from '@/pages/Favorites/Favorites';
import Perfil from '@/pages/Perfil/Perfil';

function RouterProv() {
  return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomeC />} />
            <Route path="/inicio-sesion" element={<Login />} />
            <Route path="/sobre-nosotros" element={<About/>} />
            <Route path="/servicios" element={<Service />} />
            <Route path="/contactanos" element={<ContactUs />} />
            <Route path="/crear-cuenta" element={<CreateAccount/>} />
            <Route path="/intereses" element={<Intereses/>} />
            <Route element={<PrivateRoute />}>
              <Route path='/perfil' element={<Perfil/>} />
              <Route path="/intereses" element={<Intereses/>} />
              <Route path="/c_servicios" element={<ServiceC />} />
              <Route path='/favoritos' element={<Favorites/>} />
              <Route path="/c_sobre-nosotros" element={<AboutC />} />
              <Route path="/c_contactanos" element={<ContactUsC />} />
              <Route path="/principal" element={<HomePrincipal />} />
              <Route path="/caracteristica/:id" element={<Caracteristicas/>} />
            </Route>
          </Routes>
}

export default RouterProv; 
