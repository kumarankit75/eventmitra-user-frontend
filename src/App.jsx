import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import MyBookings from "./pages/MyBookings";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import VendorDetails from "./pages/VendorDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
  path="/vendor/:id"
  element={<VendorDetails />}
/>

          {/* Protected Routes*/}
          <Route
            path="/my-bookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          /> 

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> 
<Route
  path="/wishlist"
  element={
    <ProtectedRoute>
      <Wishlist />
    </ProtectedRoute>
  }
/>


<Route
  path="/checkout/:id"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;