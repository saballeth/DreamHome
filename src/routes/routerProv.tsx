import  ContactUs from "@/pages/ContactUs/ContactUs";
import  Create from "@/pages/CreateAccount/CreateAccount";
import { Home } from "@/pages/Home/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from '@/pages/About/About';
import  Login  from '@/pages/Login/Login';
import Service from '@/pages/Service/Service';
import HomePrincipal from "@/pages/Principal/Principal";

function RouterProv() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/aboutus",
      Component: AboutUs,
    },
    {
      path: "/create-account",
      Component: Create,
    },
    {
      path: "/contact-us",
      Component: ContactUs,
    },
    {
      path: "/login",
      Component: Login
    },
    {
      path: "/service",
      Component: Service
    },
    {
      path: "/principal",
      Component: HomePrincipal
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default RouterProv;
