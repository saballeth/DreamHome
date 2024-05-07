import {RouterProvider,createBrowserRouter, Route} from 'react-router-dom';
import PrivateRoute from '@/PrivateRoute/PrivateRoute';
import { Home } from '@/pages/Home/Index';
import AboutUs from '@/pages/About/About';
import CreateAccount from '@/components/CreateAccount/CreateAccount';
import ContactUs from '@/pages/ContactUs/ContactUs';
import Login from '@/pages/Login/Login';
import Service from '@/pages/Service/Service';
import HomePrincipal from '@/pages/Principal/Principal';
import Intereses from '@/pages/Intereses/Intereses';

function RouterProv() {
  const isAuthenticated = !!localStorage.getItem('token');

  const filteredRoutes = routes.filter(route => {
    if (route.isPrivate) {
      return isAuthenticated(); 
    }
    return true; 
  });

  const router = createBrowserRouter(filteredRoutes);

  return <RouterProvider router={router}></RouterProvider>;
}
  const routes = createBrowserRouter([ 
    { path: '/', Component: Home },
    { path: '/aboutus', Component: AboutUs },
    { path: '/create-account', Component: CreateAccount },
    { path: '/contact-us', Component: ContactUs },
    { path: '/login', Component: Login },
    { path: '/service', Component: Service },
    { path: '/principal', Component: HomePrincipal, isPrivate: true },
    { path: '/intereses', Component: Intereses },
  ]);

  const protectedRoutes = routes.map(route => {
    if (route.isPrivate) {
      return (
        <PrivateRoute
          key={route.path}
          path={route.path}
          component={route.component}
          isAuthenticated={isAuthenticated}
        />
      );
    } else {
      return (
        <Route
          key={route.path}
          path={route.path}
          Component={route.component}
        />
      );
    }
  });

  return <RouterProvider router={protectedRoutes}></RouterProvider>;
}

export default RouterProv;