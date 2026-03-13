// import { useEffect, useState } from "react";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const allBookings =
//       JSON.parse(localStorage.getItem("bookings")) || [];

//     const userBookings = allBookings.filter(
//       (booking) => booking.userEmail === user.email
//     );

//     setBookings(userBookings);
//   }, []);

//   const cancelBooking = (bookingId) => {
//     const allBookings =
//       JSON.parse(localStorage.getItem("bookings")) || [];

//     const updatedBookings = allBookings.map((booking) =>
//       booking.bookingId === bookingId
//         ? { ...booking, status: "Cancelled" }
//         : booking
//     );

//     localStorage.setItem(
//       "bookings",
//       JSON.stringify(updatedBookings)
//     );

//     setBookings(
//       updatedBookings.filter(
//         (b) =>
//           b.userEmail ===
//           JSON.parse(localStorage.getItem("user")).email
//       )
//     );
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">
//         My Bookings
//       </h2>

//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         bookings.map((booking) => (
//           <div
//             key={booking.bookingId}
//             className="border p-4 mb-4 rounded shadow"
//           >
//             <h3 className="text-xl font-semibold">
//               {booking.serviceTitle}
//             </h3>

//             <p>Price: ₹ {booking.price}</p>
//             <p>Status: {booking.status}</p>
//             <p>Date: {booking.date}</p>

//             {booking.status === "Booked" && (
//               <button
//                 onClick={() =>
//                   cancelBooking(booking.bookingId)
//                 }
//                 className="mt-2 bg-red-500 text-white px-4 py-1"
//               >
//                 Cancel Booking
//               </button>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyBookings;






import { useEffect, useState } from "react";
import vendors from "../api/vendors";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const userBookings = allBookings.filter(
      (booking) => booking.userEmail === user.email
    );

    setBookings(userBookings);
  }, []);

  const getStatusStyle = (status) => {
    if (status === "Paid")
      return "bg-green-100 text-green-600";
    if (status === "Cancelled")
      return "bg-red-100 text-red-600";
    return "bg-yellow-100 text-yellow-600";
  };

  const cancelBooking = (bookingId) => {
    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedBookings = allBookings.map((booking) =>
      booking.bookingId === bookingId
        ? { ...booking, status: "Cancelled" }
        : booking
    );

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    const user = JSON.parse(localStorage.getItem("user"));

    setBookings(
      updatedBookings.filter(
        (b) => b.userEmail === user.email
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-10">
        My Bookings 📅
      </h1>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-xl font-semibold mb-3">
            No bookings yet
          </h2>
          <p className="text-gray-500">
            Book a vendor to see your reservations here.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {bookings.map((booking) => {
            const vendor = vendors.find(
              (v) => v.id === booking.serviceId
            );

            return (
              <div
                key={booking.bookingId}
                className="bg-white rounded-3xl shadow-lg flex overflow-hidden"
              >
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-48 object-cover"
                />

                <div className="p-8 flex justify-between w-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {vendor.name}
                    </h3>
                    <p className="text-gray-500 mb-2">
                      ₹ {vendor.price}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {booking.date}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>

                    {booking.status === "Paid" && (
                      <button
                        onClick={() =>
                          cancelBooking(booking.bookingId)
                        }
                        className="mt-4 bg-red-100 text-red-600 px-4 py-2 rounded-xl"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookings;