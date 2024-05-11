import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/PrivateRoute/PrivateRoute';
import { Home } from '@/pages/Home/Index';
import AboutUs from '@/pages/About/About';
import CreateAccount from '@/components/CreateAccount/CreateAccount';
import ContactUs from '@/pages/ContactUs/ContactUs';
import Login from '@/pages/Login/Login';
import Service from '@/pages/Service/Service';
import HomePrincipal from '@/pages/Principal/Principal';
import Caracteristicas from '@/pages/Caracteristicas/caracteristicasInmuebles';
import Intereses from '@/pages/Intereses/Intereses';


function RouterProv() {
  return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/create-account" element={<CreateAccount/>} />
            <Route path="/intereses" element={<Intereses/>} />
            
            <Route element={<PrivateRoute />}>
              <Route path="/principal" element={<HomePrincipal />} />
              <Route path="/caracteristica/:id" element={<Caracteristicas/>} />
            </Route>
          </Routes>
}

export default RouterProv; 
