import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaEnvelope, FaCertificate,
  FaTrophy, FaStar, FaSun, FaMoon, FaBars, FaTimes, FaImages, FaUserShield, FaLightbulb
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const location = useLocation();
  const { handleThemeToggle } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Persist theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      dispatch(toggleTheme());
    }
  }, [dispatch]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    handleThemeToggle(); // Ensure ThemeProvider updates
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md z-50 transition duration-300 
        ${darkMode ? "bg-[#1E2938] text-white" : "bg-[#F8FAFC] text-black"}`}>

      {/* First Row: Logo, Welcome Text, Theme Toggle, Admin */}
      <div className="container flex items-center justify-between max-w-[1200px] mx-auto px-6 py-3">

        {/* Logo - Left */}
        <h1 className="text-2xl font-bold flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="src/assets/logo.png"
              alt="MyPortfolio Logo"
              className="h-16 w-auto object-contain rounded shadow-md"
            />
          </Link>
        </h1>

        {/* Welcome Text - Center */}
        <motion.h2
          className="text-lg font-semibold hidden md:block text-center flex-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Welcome to{" "}
          <span className="text-blue-400 font-bold">
            <Typewriter words={["Sampath's Portfolio!"]} loop={0} typeSpeed={100} deleteSpeed={50} delaySpeed={1500} />
          </span>
        </motion.h2>

        {/* Rightmost Section: Theme Toggle & Admin */}
        <div className="flex items-center ml-auto gap-6">

          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600 transition flex items-center space-x-2"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
            <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          </button>

          {/* Admin Section - Rightmost */}
          <Link to="/admin" className="flex items-center space-x-1 hover:text-red-500 transition ml-6">
            <FaUserShield className="text-xl" />
            <span className="font-semibold">Admin</span>
          </Link>
        </div>
      </div>

      {/* Second Row: Navigation Bar */}
      <div className={`border-t ${darkMode ? "border-gray-700" : "border-gray-300"} py-3 -mt-2`}>
        <div className="container flex items-center justify-evenly max-w-[1200px] mx-auto px-4">

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex flex-wrap justify-center flex-grow space-x-4 text-lg font-medium">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaHome /><span>Home</span></Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaUser /><span>About</span></Link>
            <Link to="/projects" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaProjectDiagram /><span>Projects</span></Link>
            <Link to="/skills" className="flex items-center space-x-1 hover:text-blue-400 transition" onClick={handleLinkClick}><FaLightbulb /><span>Skills</span></Link>
            <Link to="/work-experience" className="flex items-center space-x-1 whitespace-nowrap hover:text-blue-500 transition" onClick={handleLinkClick}><FaBriefcase /><span>Work Experience</span></Link>
            <Link to="/certifications" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaCertificate /><span>Certifications</span></Link>
            <Link to="/achievements" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaTrophy /><span>Achievements</span></Link>
            <Link to="/hobbies" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaStar /><span>Hobbies</span></Link>
            <Link to="/gallery" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaImages /><span>Gallery</span></Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-blue-500 transition" onClick={handleLinkClick}><FaEnvelope /><span>Contact</span></Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end p-4 -mt-4">
        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {
        menuOpen && (
          <nav className={`md:hidden -mt-4 p-4 w-[90%] mx-auto ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} 
            rounded-md shadow-md relative flex flex-col space-y-2 max-h-[70vh] overflow-y-auto`}>
            <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaHome /><span>Home</span>
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaUser /><span>About</span>
            </Link>
            <Link to="/projects" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaProjectDiagram /><span>Projects</span>
            </Link>
            <Link to="/skills" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-400 transition">
              <FaLightbulb /><span>Skills</span>
            </Link>
            <Link to="/work-experience" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaBriefcase /><span>Work Experience</span>
            </Link>
            <Link to="/certifications" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaCertificate /><span>Certifications</span>
            </Link>
            <Link to="/achievements" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaTrophy /><span>Achievements</span>
            </Link>
            <Link to="/hobbies" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaStar /><span>Hobbies</span>
            </Link>
            <Link to="/gallery" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaImages /><span>Gallery</span>
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-blue-500 transition">
              <FaEnvelope /><span>Contact</span>
            </Link>
            <Link to="/admin" onClick={handleLinkClick} className="flex items-center space-x-2 py-2 text-lg hover:text-red-500 transition">
              <FaUserShield /><span>Admin</span>
            </Link>
          </nav>
        )
      }
    </header>
  );
};

export default Header;
