import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state.theme); // Ensure theme consistency

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/contact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessages(res.data.messages);
      } catch (error) {
        setError(
          error.response?.data?.message || "Server error. Try again later."
        );
        console.error("Error fetching messages", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } p-10`}
    >
      {/* ✅ Header Section with Logout Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/7"></div>
        <h2 className="text-3xl font-bold flex items-center text-center">
          <span className="text-red-500 text-4xl mr-2">📩</span> Contact Messages
        </h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div
        className={`p-6 rounded-md shadow-lg overflow-x-auto ${
          darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
      >
        {loading ? (
          <p className="text-center text-gray-500">Loading messages...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages found.</p>
        ) : (
          <table
            className={`w-full border-collapse ${
              darkMode ? "border-gray-600" : "border-gray-300"
            }`}
          >
            <thead
              className={`${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-200"
              }`}
            >
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr
                  key={msg._id}
                  className={`${
                    darkMode
                      ? "hover:bg-gray-700 border-gray-600"
                      : "hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2 font-semibold">{msg.name}</td>
                  <td
                    className={`border px-4 py-2 ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {msg.email}
                  </td>
                  <td className="border px-4 py-2">{msg.message}</td>
                  <td className="border px-4 py-2 text-gray-500">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
