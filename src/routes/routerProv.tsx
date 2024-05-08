import {RouterProvider,createBrowserRouter, Route, Router, createRoutesFromElements} from 'react-router-dom';
import PrivateRoute from '@/PrivateRoute/PrivateRoute';
import { Home } from '@/pages/Home/Index';
import AboutUs from '@/pages/About/About';
import CreateAccount from '@/components/CreateAccount/CreateAccount';
import ContactUs from '@/pages/ContactUs/ContactUs';
import Login from '@/pages/Login/Login';
import Service from '@/pages/Service/Service';
import HomePrincipal from '@/pages/Principal/Principal';
import Intereses from '@/pages/Intereses/Intereses';
import { Component } from 'react';

function RouterProv() {
  // const routes = createBrowserRouter([ 
  //   { path: '/', Component: Home },
  //   { path: '/aboutus', Component: AboutUs },
  //   { path: '/create-account', Component: CreateAccount },
  //   { path: '/contact-us', Component: ContactUs },
  //   { path: '/login', Component: Login },
  //   { path: '/service', Component: Service },
  //   { path: '/principal', Component: PrivateRoute},
  //   { path: '/intereses', Component: Intereses },
    
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<Home />}>
        
      //   <Route path="/principal" element={<PrivateRoute Component={HomePrincipal} />} />
      // </Route>
      <>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service" element={<Service />} />
      <Route path="/principal" element={<PrivateRoute Component={HomePrincipal} />} />
      <Route path="/intereses" element={<Intereses />} />
    </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;

}

export default RouterProv;