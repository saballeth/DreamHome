import { Home } from '@/pages/Home/Index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  Login  from '@/pages/Login';
import AboutUs from '@/pages/About/About';
import Service from '@/pages/Service/Service';


function RouterProv(){
    
    const routes = createBrowserRouter([
        {   path:"/",
            Component:Home,
        },
        {path:"/Login",
        Component:Login,
        },
        {
            path: "/aboutUs",
            Component: AboutUs,
        },
        {path: "/Service",
        Component: Service,
        }
      
    ]);
    
    return(
       <RouterProvider router={routes}></RouterProvider>
    )
}


export default RouterProv