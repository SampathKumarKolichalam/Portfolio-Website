import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import aws from "../assets/project1.png";
import google from "../assets/project1.png";
import azure from "../assets/project1.png";

const certifications = [
  { title: "AWS Certified Solutions Architect", image: aws },
  { title: "Google Cloud Professional Architect", image: google },
  { title: "Microsoft Azure Fundamentals", image: azure },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 md:px-24 py-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        🏆 My Certifications
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col items-center hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.02 }}
            onClick={() => setSelectedImage(cert.image)}
          >
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
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
              alt="Enlarged Certification"
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

export default Certifications;
