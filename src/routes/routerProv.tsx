import { Home } from '@/pages/Home/Index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function RouterProv(){
    
    const routes = createBrowserRouter([
        {   path:"/",
            Component:Home,
            // errorElement: <ErrorPage/>
        },
      
    ]);
    
    return(
       <RouterProvider router={routes}></RouterProvider>
    )
}


export default RouterProv