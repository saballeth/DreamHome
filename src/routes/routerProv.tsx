import  ContactUs from "@/pages/ContactUs/ContactUs";
import  CreateAccount from "@/components/CreateAccount/CreateAccount";
import { Home } from "@/pages/Home/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from '@/pages/About/About';
import  Login  from '@/pages/Login/Login';
import Service from '@/pages/Service/Service';
import HomePrincipal from "@/pages/Principal/Principal";
import Intereses from "@/pages/Intereses/Intereses";

function RouterProv() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      // errorElement: <ErrorPage/>
    },
    {
      path: "/aboutus",
      Component: AboutUs,
      // errorElement: <ErrorPage/>
    },
    {
      path: "/create-account",
      Component: CreateAccount,
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
    },
    {
      path: "/intereses",
      Component: Intereses
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default RouterProv;