import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdCamera } from "react-icons/md"; // Camera Icon for Title
import gallery1 from "../assets/gallery/trip1.jpg";
import gallery2 from "../assets/gallery/trip2.png";
import gallery3 from "../assets/gallery/trip1.jpg";
import gallery4 from "../assets/gallery/trip2.png";

// Array of Images with Titles
const images = [
  { src: gallery1, title: "🏔️ Trip to Mountains" },
  { src: gallery2, title: "🏝️ Beachside Adventure" },
  { src: gallery3, title: "🌆 City Exploration" },
  { src: gallery4, title: "🌅 Sunset Memories" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 px-6 py-10">
      {/* Gallery Title */}
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
        <MdCamera className="text-blue-500 text-5xl" /> 
        <span>My Gallery</span>
      </h2>

      {/* Image Title (Above Image) */}
      <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {images[currentIndex].title}
      </p>

      <div className="relative w-full max-w-5xl">
        {/* Image Container */}
        <div className="overflow-hidden rounded-lg shadow-xl transition-all duration-300">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="w-full h-[600px] md:h-[650px] object-cover rounded-lg"
          />
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-black p-5 rounded-full hover:bg-blue-500 hover:text-white transition-all">
          <FaChevronLeft className="text-2xl" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-black p-5 rounded-full hover:bg-blue-500 hover:text-white transition-all"
        >
          <FaChevronRight className="text-2xl" />
        </button>

        {/* Indicators (Below Image) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
