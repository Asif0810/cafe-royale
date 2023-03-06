import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Aboutme from "../Pages/About/Aboutme";
import Buying from "../Pages/Buying/Buying";

import ItemDetails from "../Pages/Home/FeaturedProducts/FeatureLayOut/ItemDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Login/Registeration/Registration";
import Myordered from "../Pages/MyOrder/Myordered";
import Profile from "../Pages/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://cafe-server-side.vercel.app/item-details/${params.id}`
          ),
        element: <ItemDetails></ItemDetails>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/about",
        element: <Aboutme></Aboutme>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/order",
        element: <Buying></Buying>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
