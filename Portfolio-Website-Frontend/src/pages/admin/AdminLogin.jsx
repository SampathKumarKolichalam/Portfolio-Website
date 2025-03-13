import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state.theme);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin"); // Redirect after successful login
    } catch (err) {
      setError("Invalid Credentials!");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className={`p-8 rounded-lg shadow-lg w-full max-w-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-2xl font-bold text-center mb-6">🔐 Admin Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-lg font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
