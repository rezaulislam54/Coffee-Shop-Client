import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Hompage from './pages/Hompage.jsx';
import AddCoffee from './pages/AddCoffee.jsx';
import UpdateCoffee from "./pages/UpdateCoffee.jsx";
import ViewDetails from "./pages/ViewDetails.jsx";
import AuthContexProvider from "./provider/AuthContexProvider.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PrivateRoutes from "./priveteRoutes/PrivateRoutes.jsx";
import MyAddedCoffee from "./pages/MyAddedCoffee.jsx";
import { Toaster } from "react-hot-toast";
import MyCart from "./pages/MyCart.jsx";
import ShopePage from "./pages/ShopePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Hompage></Hompage>,
        loader: () =>
          fetch("https://coffee-shop-server-jd3g.onrender.com/coffees"),
      },
      {
        path: "/shope",
        element: (
          <PrivateRoutes>
            <ShopePage></ShopePage>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://coffee-shop-server-jd3g.onrender.com/coffees"),
      },
      {
        path: "/add-coffe",
        element: (
          <PrivateRoutes>
            <AddCoffee></AddCoffee>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-jd3g.onrender.com/coffees/${params.id}`
          ),
      },
      {
        path: "/viewdetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-jd3g.onrender.com/coffees/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/myadded",
        element: (
          <PrivateRoutes>
            <MyAddedCoffee></MyAddedCoffee>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContexProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthContexProvider>
  </StrictMode>
);
