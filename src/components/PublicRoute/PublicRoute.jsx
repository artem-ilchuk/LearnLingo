// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import { Navigate, useLocation } from "react-router-dom";

// const PublicRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const location = useLocation();
//   return isLoggedIn ? (
//     <Navigate to={location?.state || "/favorites"} />
//   ) : (
//     children
//   );
// };

// export default PublicRoute;

import React from "react";

const PublicRoute = () => {
  return <div>PublicRoute</div>;
};

export default PublicRoute;
