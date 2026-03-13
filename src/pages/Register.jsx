import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.find(
      (user) => user.email === form.email
    );

    if (userExists) {
      alert("User already exists");
      return;
    }

    existingUsers.push(form);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border"
          onChange={handleChange}
          required
        />

        <button className="bg-black text-white px-4 py-2 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;