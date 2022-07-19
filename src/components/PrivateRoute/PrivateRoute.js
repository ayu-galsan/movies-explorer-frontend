import { Navigate } from "react-router-dom";

function PrivateRoute({ loggedIn, children }) {
  return loggedIn ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
