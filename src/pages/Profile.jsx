import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));

    // Update users array also
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) =>
      u.email === user.email ? user : u
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setEditMode(false);
    alert("Profile Updated Successfully 🚀");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-8">

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-bold text-gray-700">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4">
            {user.name}
          </h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!editMode}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              !editMode && "bg-gray-100"
            }`}
          />

          <input
            type="email"
            name="email"
            value={user.email}
            disabled
            className="w-full p-3 border rounded-lg bg-gray-100"
          />

          {editMode ? (
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;