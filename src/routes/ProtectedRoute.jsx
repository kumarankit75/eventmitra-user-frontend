// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const user = localStorage.getItem("user");

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;






import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;