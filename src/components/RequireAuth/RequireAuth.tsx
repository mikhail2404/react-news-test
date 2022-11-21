import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useAppSelector} from "../../redux/hooks";

const RequireAuth = () => {
  const {loggedIn} = useAppSelector(state => state.auth)

  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
