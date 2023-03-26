import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Aboutme from "../Pages/About/Aboutme";
import Admin from "../Pages/Admin/Admin";
import Buying from "../Pages/Buying/Buying";
import ChefInformation from "../Pages/ChefIntroduction/ChefDetails/ChefInformation";
import DisCoverDetails from "../Pages/DisCoverDetails/DisCoverDetails";

import ItemDetails from "../Pages/Home/FeaturedProducts/FeatureLayOut/ItemDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Login/Registeration/Registration";
import Profile from "../Pages/profile/Profile";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute.js/PrivateRoute";

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
          fetch(`https://cafe-server.vercel.app/item-details/${params.id}`),
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
        path: "/admin",
        element: (
          <PrivateRoute>
            <Admin></Admin>
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Buying></Buying>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/update-profile/:id",
        loader: ({ params }) =>
          fetch(`https://cafe-server.vercel.app/myinfo/${params.id}`),
        element: <Update></Update>,
      },
      {
        path: "chef-information/:id",
        loader: ({ params }) =>
          fetch(`https://cafe-server.vercel.app/chef-information/${params.id}`),
        element: <ChefInformation></ChefInformation>,
      },
      {
        path: "/discover-details",
        element: <DisCoverDetails></DisCoverDetails>,
      },
    ],
  },
]);
