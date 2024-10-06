import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Hompage from './pages/Hompage.jsx';
import AddCoffee from './pages/AddCoffee.jsx';
import UpdateCoffee from "./pages/UpdateCoffee.jsx";
import ViewDetails from "./pages/ViewDetails.jsx";

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
      {
        path: "/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/viewdetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
