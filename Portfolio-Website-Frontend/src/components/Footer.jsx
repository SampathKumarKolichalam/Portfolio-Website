import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
      } py-10 mt-auto w-full`}
    >
      {/* Thick Separator Line */}
      <div className={`w-full border-t-4 ${darkMode ? "border-gray-700" : "border-gray-300"}`}></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold">About MyPortfolio</h3>
          <p className="mt-2">
            A personal portfolio showcasing skills, projects, and achievements in Full Stack Development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            <li><a href="/work-experience" className="hover:text-blue-400 transition">Work Experience</a></li>
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Contact Me</h3>
          <p className="mt-2 flex items-center space-x-2">
            <FaEnvelope /> <span>example@email.com</span>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-gray-400 transition"><FaGithub size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-6 pt-4 text-center text-sm border-gray-600">
        <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
