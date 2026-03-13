// // // // import { Link } from "react-router-dom";
// // // // import services from "../data/services";

// // // // const Home = () => {
// // // //   return (
// // // //     <div className="bg-gray-50 min-h-screen">

// // // //       {/* Hero Section */}
// // // //       <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-6 text-center rounded-2xl shadow-lg">
// // // //         <h1 className="text-4xl md:text-5xl font-bold mb-6">
// // // //           Plan Your Perfect Event 🎉
// // // //         </h1>

// // // //         <p className="text-lg mb-8 opacity-90">
// // // //           Find the best vendors for weddings, birthdays, parties & more
// // // //         </p>

// // // //         <Link
// // // //           to="/services"
// // // //           className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
// // // //         >
// // // //           Explore Vendors
// // // //         </Link>
// // // //       </section>

// // // //       {/* Vendor Section */}
// // // //       <section className="mt-16 px-6">
// // // //         <h2 className="text-3xl font-bold mb-8 text-center">
// // // //           Popular Vendors
// // // //         </h2>

// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //           {services.map((service) => (
// // // //             <div
// // // //               key={service.id}
// // // //               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 group"
// // // //             >
// // // //               {/* Image Placeholder */}
// // // //               <div className="h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold">
// // // //                 {service.category}
// // // //               </div>

// // // //               <h3 className="text-xl font-semibold mb-2">
// // // //                 {service.title}
// // // //               </h3>

// // // //               <p className="text-gray-500 mb-3">
// // // //                 {service.description.substring(0, 60)}...
// // // //               </p>

// // // //               <div className="flex justify-between items-center">
// // // //                 <span className="font-bold text-lg">
// // // //                   ₹ {service.price}
// // // //                 </span>

// // // //                 <Link
// // // //                   to={`/service/${service.id}`}
// // // //                   className="text-purple-600 font-medium hover:underline"
// // // //                 >
// // // //                   View →
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;


// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";

// // // const Home = () => {
// // //   const [vendors, setVendors] = useState([]);

// // //   useEffect(() => {
// // //     fetch("https://fakestoreapi.com/products?limit=6")
// // //       .then((res) => res.json())
// // //       .then((data) => setVendors(data));
// // //   }, []);

// // //   return (
// // //     <div className="bg-gray-50 min-h-screen">

// // //       {/* Hero Section */}
// // //       <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-6 text-center rounded-3xl shadow-xl">
// // //         <h1 className="text-5xl font-bold mb-6">
// // //           Plan Your Dream Event 🎉
// // //         </h1>
// // //         <p className="text-lg opacity-90 mb-8">
// // //           Discover top vendors for weddings, birthdays & celebrations
// // //         </p>

// // //         <Link
// // //           to="/services"
// // //           className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
// // //         >
// // //           Explore Vendors
// // //         </Link>
// // //       </section>

// // //       {/* Vendors Grid */}
// // //       <section className="mt-20 px-6">
// // //         <h2 className="text-3xl font-bold text-center mb-12">
// // //           Featured Vendors
// // //         </h2>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //           {vendors.map((vendor) => (
// // //             <div
// // //               key={vendor.id}
// // //               className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-6 group"
// // //             >
// // //               <div className="h-48 flex items-center justify-center mb-6">
// // //                 <img
// // //                   src={vendor.image}
// // //                   alt={vendor.title}
// // //                   className="h-32 object-contain group-hover:scale-105 transition"
// // //                 />
// // //               </div>

// // //               <h3 className="text-lg font-semibold mb-2 line-clamp-1">
// // //                 {vendor.title}
// // //               </h3>

// // //               <p className="text-gray-500 text-sm mb-4 line-clamp-2">
// // //                 {vendor.description}
// // //               </p>

// // //               <div className="flex justify-between items-center">
// // //                 <span className="font-bold text-purple-600">
// // //                   ₹ {Math.floor(vendor.price * 100)}
// // //                 </span>

// // //                 <Link
// // //                   to="/services"
// // //                   className="text-sm font-medium text-purple-500 hover:underline"
// // //                 >
// // //                   View →
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Home;





// // import { Link } from "react-router-dom";
// // import vendors from "../api/vendors";

// // const Home = () => {
// //   return (
// //     <div className="bg-gray-50 min-h-screen px-6 py-10">

// //       {/* Hero */}
// //       <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-16 rounded-3xl text-center mb-16 shadow-xl">
// //         <h1 className="text-5xl font-bold mb-4">
// //           Find Perfect Vendors For Your Event 🎉
// //         </h1>
// //         <p className="opacity-90 mb-6">
// //           Book trusted professionals for weddings, parties & corporate events.
// //         </p>

// //         <Link
// //           to="/services"
// //           className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
// //         >
// //           Explore All Vendors
// //         </Link>
// //       </div>

// //       {/* Vendor Grid */}
// //       <h2 className="text-3xl font-bold mb-10 text-center">
// //         Top Rated Vendors
// //       </h2>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //         {vendors.map((vendor) => (
// //           <Link
// //   to={`/vendor/${vendor.id}`}
// //   key={vendor.id}
// //   className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden block"
// // >
// //           <div
// //             key={vendor.id}
// //             className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
// //           >
// //             <img
// //               src={vendor.image}
// //               alt={vendor.name}
// //               className="h-56 w-full object-cover"
// //             />

// //             <div className="p-6">
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="text-xl font-semibold">
// //                   {vendor.name}
// //                 </h3>

// //                 {vendor.verified && (
// //                   <span className="text-green-600 text-sm font-medium">
// //                     ✔ Verified
// //                   </span>
// //                 )}
// //               </div>

// //               <p className="text-purple-600 font-medium mb-1">
// //                 {vendor.category}
// //               </p>

// //               <p className="text-gray-500 text-sm mb-2">
// //                 📍 {vendor.location}
// //               </p>

// //               <p className="text-sm text-gray-600 mb-4">
// //                 {vendor.description}
// //               </p>

// //               <div className="flex justify-between items-center">
// //                 <span className="font-bold text-lg">
// //                   ₹ {vendor.price}
// //                 </span>

// //                 <span className="text-yellow-500">
// //                   ⭐ {vendor.rating}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           </Link>
// //         ))}
// //       </div>

// //     </div>
// //   );
// // };

// // export default Home;







// import { useState } from "react";
// import { Link } from "react-router-dom";
// import vendorsData from "../api/vendors";

// const categories = [
//   "All",
//   "Wedding Photographer",
//   "Event Decorator",
//   "Catering Service",
//   "Birthday Planner",
//   "DJ & Music",
//   "Corporate Planner"
// ];

// const Home = () => {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const filteredVendors = vendorsData.filter((vendor) => {
//     const matchSearch = vendor.name
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchCategory =
//       category === "All" ||
//       vendor.category === category;

//     return matchSearch && matchCategory;
//   });

//   return (
//     <div className="bg-gray-50 min-h-screen">

//       {/* Hero */}
//       <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-20 text-center rounded-b-3xl shadow-xl">
//         <h1 className="text-5xl font-bold mb-6">
//           Plan Your Perfect Event 🎉
//         </h1>

//         <input
//           type="text"
//           placeholder="Search vendors..."
//           className="w-full max-w-xl p-4 rounded-xl text-black outline-none"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Category Filters */}
//       <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
//         {categories.map((cat, index) => (
//           <button
//             key={index}
//             onClick={() => setCategory(cat)}
//             className={`px-6 py-2 rounded-full border transition ${
//               category === cat
//                 ? "bg-purple-600 text-white"
//                 : "bg-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Vendor Grid */}
//       <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">

//         {filteredVendors.length === 0 ? (
//           <p className="text-center col-span-3">
//             No vendors found.
//           </p>
//         ) : (
//           filteredVendors.map((vendor) => (
//             <Link
//               to={`/vendor/${vendor.id}`}
//               key={vendor.id}
//               className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
//             >
//               <img
//                 src={vendor.image}
//                 alt={vendor.name}
//                 className="h-56 w-full object-cover"
//               />

//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-lg font-semibold">
//                     {vendor.name}
//                   </h3>

//                   {vendor.verified && (
//                     <span className="text-green-600 text-sm">
//                       ✔
//                     </span>
//                   )}
//                 </div>

//                 <p className="text-purple-600 text-sm mb-1">
//                   {vendor.category}
//                 </p>

//                 <p className="text-gray-500 text-sm mb-2">
//                   📍 {vendor.location}
//                 </p>

//                 <div className="flex justify-between items-center">
//                   <span className="font-bold">
//                     ₹ {vendor.price}
//                   </span>

//                   <span className="text-yellow-500">
//                     ⭐ {vendor.rating}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;





import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vendorsData from "../api/vendors";

const categories = [
  "All",
  "Wedding Photographer",
  "Event Decorator",
  "Catering Service",
  "Birthday Planner",
  "DJ & Music",
  "Corporate Planner"
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const userWishlist = allWishlist.filter(
      (item) => item.userEmail === user.email
    );

    setWishlist(userWishlist);
  }, []);

  const toggleWishlist = (vendorId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    let allWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = allWishlist.find(
      (item) =>
        item.vendorId === vendorId &&
        item.userEmail === user.email
    );

    if (exists) {
      allWishlist = allWishlist.filter(
        (item) =>
          !(
            item.vendorId === vendorId &&
            item.userEmail === user.email
          )
      );
    } else {
      allWishlist.push({
        vendorId,
        userEmail: user.email
      });
    }

    localStorage.setItem("wishlist", JSON.stringify(allWishlist));

    setWishlist(
      allWishlist.filter(
        (item) => item.userEmail === user.email
      )
    );
  };

  const filteredVendors = vendorsData.filter((vendor) => {
    const matchSearch = vendor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      vendor.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-20 text-center rounded-b-3xl shadow-xl">
        <h1 className="text-5xl font-bold mb-6">
          Plan Your Perfect Event 🎉
        </h1>

        <input
          type="text"
          placeholder="Search vendors..."
          className="w-full max-w-xl p-4 rounded-xl text-black outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full border transition ${
              category === cat
                ? "bg-purple-600 text-white"
                : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vendor Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {filteredVendors.map((vendor) => {
          const isWishlisted = wishlist.some(
            (item) => item.vendorId === vendor.id
          );

          return (
            <div
              key={vendor.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden relative"
            >
              {/* Heart Button */}
              <button
                onClick={() => toggleWishlist(vendor.id)}
                className="absolute top-4 right-4 text-2xl"
              >
                {isWishlisted ? "❤️" : "🤍"}
              </button>

              <Link to={`/vendor/${vendor.id}`}>
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">
                    {vendor.name}
                  </h3>

                  <p className="text-purple-600 text-sm mb-1">
                    {vendor.category}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold">
                      ₹ {vendor.price}
                    </span>

                    <span className="text-yellow-500">
                      ⭐ {vendor.rating}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;