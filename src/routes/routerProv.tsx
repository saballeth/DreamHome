import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/PrivateRoute/PrivateRoute';
import { Home } from '@/pages/Home/Index';
import About from '@/pages/About/About';
import AboutC from '@/pages/About/AboutC';
import CreateAccount from '@/components/CreateAccount/CreateAccount';
import ContactUs from '@/pages/ContactUs/ContactUs';
import Login from '@/pages/Login/Login';
import Service from '@/pages/Service/Service';
import ServiceC from '@/pages/Service/ServiceC';
import HomePrincipal from '@/pages/Principal/Principal';
import Caracteristicas from '@/pages/Caracteristicas/caracteristicasInmuebles';
import Intereses from '@/pages/Intereses/Intereses';
import Favorites from '@/pages/Favorites/Favorites';

function RouterProv() {

  return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/create-account" element={<CreateAccount/>} />
            <Route element={<PrivateRoute />}>
              <Route path="/intereses" element={<Intereses/>} />
              <Route path="/serviceC" element={<ServiceC />} />
              <Route path='/favoritos' element={<Favorites/>} />
              <Route path="/aboutusC" element={<AboutC />} />
              <Route path="/principal" element={<HomePrincipal />} />
              <Route path="/caracteristica/:id" element={<Caracteristicas/>} />
            </Route>
          </Routes>
}

export default RouterProv; 