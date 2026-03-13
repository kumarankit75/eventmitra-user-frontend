// 






// import { useEffect, useState } from "react";
// // import services from "../data/services";
// // import { Link } from "react-router-dom";

// // const Wishlist = () => {
// //   const [wishlistItems, setWishlistItems] = useState([]);

// //   useEffect(() => {
// //     const user = JSON.parse(localStorage.getItem("user"));
// //     const allWishlist =
// //       JSON.parse(localStorage.getItem("wishlist")) || [];

// //     const userWishlist = allWishlist.filter(
// //       (item) => item.userEmail === user.email
// //     );

// //     setWishlistItems(userWishlist);
// //   }, []);

// //   const removeFromWishlist = (serviceId) => {
// //     const allWishlist =
// //       JSON.parse(localStorage.getItem("wishlist")) || [];

// //     const updatedWishlist = allWishlist.filter(
// //       (item) =>
// //         !(
// //           item.serviceId === serviceId &&
// //           item.userEmail ===
// //             JSON.parse(localStorage.getItem("user")).email
// //         )
// //     );

// //     localStorage.setItem(
// //       "wishlist",
// //       JSON.stringify(updatedWishlist)
// //     );

// //     setWishlistItems(
// //       updatedWishlist.filter(
// //         (item) =>
// //           item.userEmail ===
// //           JSON.parse(localStorage.getItem("user")).email
// //       )
// //     );
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-2xl font-bold mb-6">
// //         My Wishlist ❤️
// //       </h2>

// //       {wishlistItems.length === 0 ? (
// //         <p>No items in wishlist.</p>
// //       ) : (
// //         wishlistItems.map((item) => {
// //           const service = services.find(
// //             (s) => s.id === item.serviceId
// //           );

// //           return (
// //             <div
// //               key={item.serviceId}
// //               className="border p-4 mb-4 rounded shadow"
// //             >
// //               <h3 className="text-xl font-semibold">
// //                 {service.title}
// //               </h3>

// //               <p>₹ {service.price}</p>

// //               <Link
// //                 to={`/service/${service.id}`}
// //                 className="inline-block mt-2 bg-black text-white px-3 py-1"
// //               >
// //                 View
// //               </Link>

// //               <button
// //                 onClick={() =>
// //                   removeFromWishlist(service.id)
// //                 }
// //                 className="ml-3 bg-red-500 text-white px-3 py-1"
// //               >
// //                 Remove
// //               </button>
// //             </div>
// //           );
// //         })
// //       )}
// //     </div>
// //   );
// // };

// // export default Wishlist;





// import { useEffect, useState } from "react";
// import vendors from "../api/vendors";
// import { Link } from "react-router-dom";

// const Wishlist = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const allWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];

//     const userWishlist = allWishlist.filter(
//       (item) => item.userEmail === user.email
//     );

//     setWishlistItems(userWishlist);
//   }, []);

//   const removeFromWishlist = (vendorId) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const allWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];

//     const updatedWishlist = allWishlist.filter(
//       (item) =>
//         !(item.vendorId === vendorId && item.userEmail === user.email)
//     );

//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

//     setWishlistItems(
//       updatedWishlist.filter((item) => item.userEmail === user.email)
//     );
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen p-10">
//       <h1 className="text-3xl font-bold mb-10">My Wishlist ❤️</h1>

//       {wishlistItems.length === 0 ? (
//         <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
//           <h2 className="text-xl font-semibold mb-3">
//             Your wishlist is empty
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Explore vendors and add your favorites.
//           </p>
//           <Link
//             to="/"
//             className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl"
//           >
//             Explore Vendors
//           </Link>
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-2 gap-8">
//           {wishlistItems.map((item) => {
//             const vendor = vendors.find(
//               (v) => v.id === item.vendorId
//             );

//             return (
//               <div
//                 key={vendor.id}
//                 className="bg-white rounded-3xl shadow-lg overflow-hidden flex"
//               >
//                 <img
//                   src={vendor.image}
//                   alt={vendor.name}
//                   className="w-40 object-cover"
//                 />

//                 <div className="p-6 flex flex-col justify-between w-full">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-1">
//                       {vendor.name}
//                     </h3>
//                     <p className="text-purple-600 text-sm mb-2">
//                       {vendor.category}
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       ₹ {vendor.price}
//                     </p>
//                   </div>

//                   <div className="flex gap-3 mt-4">
//                     <Link
//                       to={`/vendor/${vendor.id}`}
//                       className="flex-1 text-center bg-purple-600 text-white py-2 rounded-xl"
//                     >
//                       View
//                     </Link>

//                     <button
//                       onClick={() =>
//                         removeFromWishlist(vendor.id)
//                       }
//                       className="flex-1 bg-red-100 text-red-600 py-2 rounded-xl"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;








import { useEffect, useState } from "react";
import vendors from "../api/vendors";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const userWishlist = allWishlist.filter(
      (item) => item.userEmail === user.email
    );

    setWishlistItems(userWishlist);
  }, []);

  const removeFromWishlist = (vendorId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const updatedWishlist = allWishlist.filter(
      (item) =>
        !(
          item.vendorId === vendorId &&
          item.userEmail === user.email
        )
    );

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    setWishlistItems(
      updatedWishlist.filter(
        (item) => item.userEmail === user.email
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-10">
        My Wishlist ❤️
      </h1>

      {wishlistItems.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-xl font-semibold mb-3">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Add vendors from homepage.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl"
          >
            Explore Vendors
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {wishlistItems.map((item) => {
            const vendor = vendors.find(
              (v) => v.id === item.vendorId
            );

            if (!vendor) return null;

            return (
              <div
                key={vendor.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden flex"
              >
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-40 object-cover"
                />

                <div className="p-6 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {vendor.name}
                    </h3>
                    <p className="text-purple-600 text-sm mb-2">
                      {vendor.category}
                    </p>
                    <p className="text-gray-500 text-sm">
                      ₹ {vendor.price}
                    </p>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Link
                      to={`/vendor/${vendor.id}`}
                      className="flex-1 text-center bg-purple-600 text-white py-2 rounded-xl"
                    >
                      View
                    </Link>

                    <button
                      onClick={() =>
                        removeFromWishlist(vendor.id)
                      }
                      className="flex-1 bg-red-100 text-red-600 py-2 rounded-xl"
                    >
                      Remove
                    </button>
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

export default Wishlist;