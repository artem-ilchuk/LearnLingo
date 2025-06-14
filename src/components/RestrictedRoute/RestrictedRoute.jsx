// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import { Navigate, useLocation } from "react-router-dom";

// const RestrictedRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const location = useLocation();
//   return isLoggedIn ? children : <Navigate to="/" state={location} />;
// };

// export default RestrictedRoute;

import React from "react";

const RestrictedRoute = () => {
  return <div>RestrictedRoute</div>;
};

export default RestrictedRoute;
