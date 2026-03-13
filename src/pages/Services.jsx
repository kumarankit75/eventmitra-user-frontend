// import { Link } from "react-router-dom";
// import services from "../data/services";

// const Services = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Available Services</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="border p-4 rounded shadow"
//           >
//             <h3 className="text-xl font-semibold">
//               {service.title}
//             </h3>
//             <p className="text-gray-600">
//               ₹ {service.price}
//             </p>
//             <p className="text-sm mt-2">
//               {service.category}
//             </p>

//             <Link
//               to={`/service/${service.id}`}
//               className="inline-block mt-4 bg-black text-white px-4 py-2"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;




import { useState } from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/services";

const Services = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");




const addToWishlist = (serviceId) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first");
    return;
  }

  const existingWishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  const alreadyExists = existingWishlist.find(
    (item) =>
      item.serviceId === serviceId &&
      item.userEmail === user.email
  );

  if (alreadyExists) {
    alert("Already in wishlist");
    return;
  }

  existingWishlist.push({
    serviceId,
    userEmail: user.email
  });

  localStorage.setItem(
    "wishlist",
    JSON.stringify(existingWishlist)
  );

  alert("Added to wishlist ❤️");
};






  // Unique categories
  const categories = [
    "All",
    ...new Set(servicesData.map((s) => s.category)),
  ];

  // Filter Logic
  let filteredServices = servicesData.filter((service) => {
    const matchSearch = service.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || service.category === category;

    return matchSearch && matchCategory;
  });

  // Sort Logic
  if (sortOrder === "low") {
    filteredServices.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high") {
    filteredServices.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Available Services
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search service..."
          className="p-2 border w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          className="p-2 border"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredServices.length === 0 ? (
          <p>No services found.</p>
        ) : (
          filteredServices.map((service) => (
            <div
              key={service.id}
              className="border p-4 rounded shadow"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-600">
                ₹ {service.price}
              </p>

              <p className="text-sm mt-2">
                {service.category}
              </p>
<button
  onClick={() => addToWishlist(service.id)}
  className="mt-2 text-red-500"
>
  ❤️ Add to Wishlist
</button>
              <Link
                to={`/service/${service.id}`}
                className="inline-block mt-4 bg-black text-white px-4 py-2"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;