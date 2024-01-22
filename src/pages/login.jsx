import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "../services/cookieService";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    e.preventDefault();
    setCookie("username", formData.username, 1000000);
    setCookie("password", formData.password, 1000000);

    navigate("/home");
  };

  return (
    <form onSubmit={handleLogin} className="w-3/4 max-w-96 h-max m-auto mt-20">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          placeholder="Enter username"
          value={formData.username}
          onChange={(e) => handleChange("username", e.target.value)}
          className="px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          className="px-3 py-2"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <Link
          className="px-4 py-2 text-pink-500 hover:text-pink-700 text-[14px] font-semibold"
          to={"/signup"}
        >
          Signup
        </Link>
      </div>
    </form>
  );
};

export default Login;
