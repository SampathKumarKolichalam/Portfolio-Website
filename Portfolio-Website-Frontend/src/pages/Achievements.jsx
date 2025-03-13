import { motion } from "framer-motion";
import hackathon from "../assets/project1.png";
import coding from "../assets/project1.png";
import leadership from "../assets/project1.png";

const achievements = [
  { title: "Winner - Hackathon 2024", description: "Developed an AI-powered chatbot in a 24-hour hackathon.", image: hackathon },
  { title: "Top 10 - International Coding Challenge", description: "Ranked among top 10 participants worldwide.", image: coding },
  { title: "Leadership Award", description: "Recognized for leading a tech community.", image: leadership },
];

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 md:px-24 py-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        🏅 My Achievements
      </h2>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col items-center hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.02 }}
          >
            <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
