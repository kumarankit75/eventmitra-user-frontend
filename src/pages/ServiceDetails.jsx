// import { useParams } from "react-router-dom";
// import services from "../data/services";

// const ServiceDetails = () => {
//   const { id } = useParams();

//   const service = services.find(
//     (s) => s.id === parseInt(id)
//   );

//   if (!service) {
//     return <h2>Service Not Found</h2>;
//   }

//   return (
//     <div className="max-w-2xl">
//       <h2 className="text-3xl font-bold mb-4">
//         {service.title}
//       </h2>

//       <p className="text-lg text-gray-600 mb-2">
//         Category: {service.category}
//       </p>

//       <p className="text-lg mb-4">
//         Price: ₹ {service.price}
//       </p>

//       <p className="mb-6">
//         {service.description}
//       </p>

//       <button className="bg-green-600 text-white px-6 py-2">
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default ServiceDetails;






import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const service = services.find(
    (s) => s.id === parseInt(id)
  );

  const handleBooking = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login to book service");
      navigate("/login");
      return;
    }

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      bookingId: Date.now(),
      userEmail: user.email,
      serviceId: service.id,
      serviceTitle: service.title,
      price: service.price,
      status: "Booked",
      date: new Date().toLocaleString()
    };

    existingBookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    alert("Service Booked Successfully!");
    navigate("/my-bookings");
  };

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">
        {service.title}
      </h2>

      <p className="text-lg text-gray-600 mb-2">
        Category: {service.category}
      </p>

      <p className="text-lg mb-4">
        Price: ₹ {service.price}
      </p>

      <p className="mb-6">
        {service.description}
      </p>

      {/* <button
        onClick={handleBooking}
        className="bg-green-600 text-white px-6 py-2"
      >
        Book Now
      </button> */}

<button
  onClick={() => navigate(`/checkout/${service.id}`)}
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
>
  Book Now
</button>


    </div>
  );
};

export default ServiceDetails;