import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(Context);
  const location = useLocation();
  if (loader) {
    return <div>Loading.........</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
