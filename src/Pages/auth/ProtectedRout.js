// import { Navigate, useLocation } from "react-router-dom";

// export default function ProtectedRout({ children, user }) {
//   const location = useLocation();
//   return user ? (
//     children
//   ) : (
//     <Navigate state={{ from: location }} replace to="/login"></Navigate>
//   );
// }

import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRout({ children, user, isAdmin }) {
  const location = useLocation();

  // Check if user is authenticated
  if (!user) {
    return <Navigate state={{ from: location }} replace to="/login" />;
  }

  // If isAdmin is true, check if the user has admin email
  if (isAdmin && user.email !== "admin@gmail.com") {
    return (
      <h5 className="m-3 p-3">
        ....Only Admin Have Permisition To Add Products
      </h5>
    );
  }

  return children; // If user is authenticated and (not admin or is admin), render children
}
