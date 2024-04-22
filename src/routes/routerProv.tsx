import { Home } from '@/pages/Home/Index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  Login  from '@/pages/Login';
import AboutUs from '@/pages/About/About';

function RouterProv(){
    
    const routes = createBrowserRouter([
        {   path:"/",
            Component:Home,
            // errorElement: <ErrorPage/>
        },
        {path:"/Login",
        Component:Login,

        },
        {
            path: "/aboutUs",
            Component: AboutUs,
            // errorElement: <ErrorPage/>
        },
      
    ]);
    
    return(
       <RouterProvider router={routes}></RouterProvider>
    )
}


export default RouterProv