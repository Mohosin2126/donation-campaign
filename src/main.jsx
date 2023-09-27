import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Donation from './components/Donation/Donation.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import SingleCategory from './components/SingleCategory/SingleCategory.jsx';
import Error from './components/ErrorElement/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("/data.json"),
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
      },
      
        {
          path:"/statistics",
          element:<Statistics></Statistics>
        },
        {
          path:"/Donation-Details-page/:id",
          element:<SingleCategory></SingleCategory>,
          loader:()=>fetch("/data.json"),
        }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
