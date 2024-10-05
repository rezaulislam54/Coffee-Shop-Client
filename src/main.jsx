import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Hompage from './pages/Hompage.jsx';
import AddCoffee from './pages/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Hompage></Hompage>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/add-coffe",
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
