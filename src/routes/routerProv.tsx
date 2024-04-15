import { Home } from '@/pages/Home/Index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  Login  from '@/pages/Home/Login';
function RouterProv(){
    
    const routes = createBrowserRouter([
        {   path:"/",
            Component:Home,
            // errorElement: <ErrorPage/>
        },
        {path:"/Login",
        Component:Login,

        }
      
    ]);
    
    return(
       <RouterProvider router={routes}></RouterProvider>
    )
}


export default RouterProv