// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   const user = localStorage.getItem("user");

// //   return (
// //     <nav className="bg-black text-white p-4 flex justify-between">
// //       <h1 className="text-xl font-bold">EventMitraa</h1>

// //       <div className="space-x-4">
// //         <Link to="/">Home</Link>
// //         <Link to="/services">Services</Link>

// //         {user ? (
// //           <>
// //             <Link to="/my-bookings">My Bookings</Link>
// //             <Link to="/profile">Profile</Link>
// //           </>
// //         ) : (
// //           <>
// //             <Link to="/login">Login</Link>
// //             <Link to="/register">Register</Link>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;







// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-black text-white p-4 flex justify-between">
//       <h1 className="text-xl font-bold">EventMitraa</h1>

//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/services">Services</Link>

//         {user ? (
//           <>
//             <span>Hi, {user.name}</span>
//             <Link to="/my-bookings">My Bookings</Link>
//             <Link to="/profile">Profile</Link>
//           <Link to="/wishlist">Wishlist</Link>
//             <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          EventMitraa
        </h1>

        {/* Center Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-purple-500 transition">
            Home
          </Link>

          <Link to="/services" className="hover:text-purple-500 transition">
            Vendors
          </Link>

          {user && (
            <>
              <Link to="/wishlist" className="hover:text-purple-500 transition">
                Wishlist
              </Link>

              <Link to="/my-bookings" className="hover:text-purple-500 transition">
                Bookings
              </Link>
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">

          {user ? (
            <>
              <span className="text-sm font-medium">
                Hi, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-purple-500"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;