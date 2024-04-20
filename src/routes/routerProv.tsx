import AboutUs from "@/components/AboutUs/AboutUs";
import { ContactUs } from "@/pages/ContactUs/ContactUs";
import { CreateAccount } from "@/pages/CreateAccount/CreateAccount";
import { Home } from "@/pages/Home/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default RouterProv;
