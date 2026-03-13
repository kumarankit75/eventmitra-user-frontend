import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find(
    (s) => s.id === parseInt(id)
  );

  const handlePayment = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      bookingId: Date.now(),
      userEmail: user.email,
      serviceId: service.id,
      serviceTitle: service.title,
      price: service.price,
      status: "Paid",
      date: new Date().toLocaleString()
    };

    existingBookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    navigate("/my-bookings");
  };

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Checkout
        </h2>

        {/* Service Summary */}
        <div className="border p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold">
            {service.title}
          </h3>
          <p className="text-gray-600">
            Category: {service.category}
          </p>
          <p className="text-lg font-bold mt-2">
            ₹ {service.price}
          </p>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" defaultChecked />
            <span>Credit / Debit Card</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span>UPI</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span>Net Banking</span>
          </label>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;