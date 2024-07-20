import React from 'react';
import ReactDOM from 'react-dom/client';

import{
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom"
 import Home from './views/Home/Home';
 import AddPlant from './views/AddPlant/AddPlant'
 import UpdatePlant from './views/UpdatePlant/UpdatePlant'

 const root = ReactDOM.createRoot(document.getElementById("root"))
 const router =  createBrowserRouter([
     {
         path:"/",
         element:<Home/>
     },
     {
      path:"/add",
      element:<AddPlant/>
  },
  {
    path:"/update/:id",
    element:<UpdatePlant/>
},
     {
      path:"*",
      element:<> 404 not found</>
  }
])
root.render(<RouterProvider router={router}/>)


