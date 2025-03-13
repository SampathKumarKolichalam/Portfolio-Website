import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaDownload, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/Profile.jpg";

const Hero = () => {
  const [downloading, setDownloading] = useState(false);
  const { darkMode } = useSelector((state) => state.theme);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Sampath_Kumar_Kolichalam_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 2000);
  };

  return (
    <section className={`flex flex-col md:flex-row items-center justify-between min-h-screen px-10 pt-10 pb-16 -mt-12 ml-5 relative 
      ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

      {/* Left Side - Introduction */}
      <motion.div
        className="md:w-1/2 space-y-6 z-10 text-center md:text-left px-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold leading-tight">
          Hello, This is <span className="text-blue-500">Sampath Kumar Kolichalam</span> 👋
        </h1>

        {/* Typing Animation for Role */}
        <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300">
          I'm a{" "}
          <span className="text-blue-500 font-bold">
            <Typewriter words={["Full Stack Developer", "Software Engineer", "Java Developer"]} loop={true} typeSpeed={100} deleteSpeed={50} delaySpeed={1500} />
          </span>
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Passionate about building scalable web applications that create impact.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-5 mt-4">
          {[FaFacebook, FaLinkedin, FaInstagram, FaGithub].map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-all"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          {/* View Projects Button */}
          <Link to="/projects" className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition text-lg text-center">
            View Projects
          </Link>

          {/* View Resume Button - Opens in New Tab */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition text-lg text-center">
            View Resume
          </a>

          {/* Resume Download Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition text-lg"
          >
            {downloading ? "⏳ Downloading..." : (<><FaDownload className="mr-2" /> Download Resume</>)}
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side - Profile Image with Better Spacing */}
      <motion.div
        className="md:w-1/2 flex justify-center z-10 mt-10 md:mt-0 mb-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
          <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
