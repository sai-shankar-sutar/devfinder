import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Developers from '../pages/Developers'
import DeveloperProfile from '../pages/DeveloperProfile'
import Notfound from '../pages/Notfound'
const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout/>,
            children:[{
                path:"",
                element:<Home/>
            },{
                  path:"/alldevs",
                element:<Developers/>
            },{
                  path:"/devprofile",
                element:<DeveloperProfile/>
            },{
                  path:"/notfound",
                element:<Notfound/>
            }]
        }
    ])
  return <RouterProvider router={router}/>

}

export default AppRoutes
