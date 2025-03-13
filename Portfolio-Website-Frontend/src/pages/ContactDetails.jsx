import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profilePic from "../assets/Profile.jpg";

const ContactDetails = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // Success/Error messages
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("⚠️ Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setStatusMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData, {});
      if (response.data.success) {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        // Hide message after 1.5 seconds
        setTimeout(() => {
          setStatusMessage("");
        }, 1500);
      } else {
        setStatusMessage("❌ Failed to send message.");
      }
    } catch (error) {
      setStatusMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 md:px-24 py-14">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        📩 Get In Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Contact Form */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">💬 Send a Message</h3>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-5">
              <label htmlFor="name" className="block text-lg font-bold text-gray-700 dark:text-gray-300">
                👤 Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-lg font-bold text-gray-700 dark:text-gray-300">
                ✉️ Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Phone Number Field (Optional) */}
            <div className="mb-5">
              <label htmlFor="phone" className="block text-lg font-bold text-gray-700 dark:text-gray-300">
                📞 Phone Number <span className="text-gray-500 text-sm">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number (Optional)"
              />
            </div>

            {/* Message Field */}
            <div className="mb-5">
              <label htmlFor="message" className="block text-lg font-bold text-gray-700 dark:text-gray-300">
                📝 Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              {loading ? "🚀 Sending..." : "📨 Send Message"}
            </button>
          </form>
          <p className="mt-4 text-lg text-center">{statusMessage}</p>
        </motion.div>

        {/* Right - Contact Details & Profile Picture Aligned Properly */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Contact Info Box with Responsive Layout */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center md:items-start">

            {/* Left: Contact Info */}
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">📞 Contact Info</h3>
              <p className="flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-300">
                <FaEnvelope className="mr-3 text-blue-500" /> <strong>Email:</strong> sampathkumarkolichalam@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-300">
                <FaPhone className="mr-3 text-blue-500" /> <strong>Phone:</strong> +1-330-554-1481
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-blue-500" /> <strong>Location:</strong> Ohio, USA
              </p>
            </div>

            {/* Right: Profile Picture (Will be Below Contact Info in Small Screens) */}
            <div className="md:w-1/3 flex justify-center mt-4 md:mt-0">
              <img src={profilePic} alt="Profile" className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg" />
            </div>

          </div>

          {/* Social Media Box */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">🌐 Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 transition duration-300 transform hover:scale-110">
                <FaGithub className="text-2xl text-gray-900 dark:text-white hover:text-white" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 transition duration-300 transform hover:scale-110">
                <FaLinkedin className="text-2xl text-gray-900 dark:text-white hover:text-white" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 transition duration-300 transform hover:scale-110">
                <FaTwitter className="text-2xl text-gray-900 dark:text-white hover:text-white" />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container overflow-hidden rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48071.11265163644!2d-81.39242384291857!3d41.14665024506705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88312517f853b389%3A0xca32e9984284c48f!2sKent%2C%20OH!5e0!3m2!1sen!2us!4v1739913548038!5m2!1sen!2us"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactDetails;
