import { useParams, useNavigate } from "react-router-dom";
import vendors from "../api/vendors";

const VendorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const vendor = vendors.find(
    (v) => v.id === parseInt(id)
  );

  if (!vendor) {
    return (
      <div className="p-10 text-center text-xl">
        Vendor Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Image Banner */}
      <div className="relative h-96">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            {vendor.name}
          </h1>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-10">

        {/* Left Info */}
        <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-lg">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              {vendor.category}
            </h2>

            {vendor.verified && (
              <span className="text-green-600 font-medium">
                ✔ Verified Vendor
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-3">
            📍 {vendor.location}
          </p>

          <p className="text-yellow-500 mb-4">
            ⭐ {vendor.rating} Rating
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {vendor.description}
          </p>

          <p className="text-gray-600">
            Experience: {vendor.experience}
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg h-fit sticky top-20">

          <h3 className="text-2xl font-bold mb-4">
            ₹ {vendor.price}
          </h3>

          <p className="text-gray-500 mb-6">
            Starting price
          </p>

          <button
            onClick={() =>
              navigate(`/checkout/${vendor.id}`)
            }
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Book Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default VendorDetails;