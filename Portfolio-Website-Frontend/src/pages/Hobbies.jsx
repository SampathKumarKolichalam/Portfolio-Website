import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa"; 
import photography from "../assets/Profile.jpg";
import gaming from "../assets/photography.png";
import traveling from "../assets/photography.png";
import reading from "../assets/photography.png";
import music from "../assets/photography.png";

// Hobbies Array with Images
const hobbies = [
  { title: "Photography", description: "Capturing stunning moments and landscapes.", image: photography },
  { title: "Gaming", description: "Exploring the world of video games and e-sports.", image: gaming },
  { title: "Traveling", description: "Visiting new places and experiencing different cultures.", image: traveling },
  { title: "Reading", description: "Diving into books on technology, fiction, and self-growth.", image: reading },
  { title: "Music", description: "Playing instruments and enjoying different genres.", image: music },
];

const Hobbies = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="hobbies" className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 md:px-24 py-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        🎭 My Hobbies
      </h2>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 min-h-[350px] flex flex-col items-center hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.02 }}
            onClick={() => setSelectedImage(hobby.image)}
          >
            <img
              src={hobby.image}
              alt={hobby.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{hobby.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{hobby.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Image Preview with Close Button */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white bg-red-500 hover:bg-red-700 p-3 rounded-full shadow-lg z-50"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={24} />
            </button>

            {/* Enlarged Image */}
            <motion.img
              src={selectedImage}
              alt="Enlarged Hobby"
              className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hobbies;
