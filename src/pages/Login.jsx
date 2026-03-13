import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    );

    if (!user) {
      alert("Invalid Credentials");
      return;
    }

    // Fake token
    localStorage.setItem("token", "fake-jwt-token");
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;