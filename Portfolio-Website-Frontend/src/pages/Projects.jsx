import { motion } from "framer-motion";
import project1 from "../assets/project1.png"; // Replace with actual images
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/portfolio.png"; // Add portfolio image

const projects = [
  {
    id: 1,
    title: "Amazon Clone Web Application",
    description: "Developed a full-stack Amazon-like e-commerce platform with authentication, product listings, cart, and checkout features.",
    techStack: ["React.js", "Redux Toolkit", "Node.js", "MongoDB"],
    liveDemo: "#", // Replace with actual link
    github: "#", // Replace with actual link
    image: project1,
  },
  {
    id: 2,
    title: "Banking Microservices System",
    description: "A scalable banking application using microservices architecture for handling transactions, accounts, and authentication.",
    techStack: ["Spring Boot", "Kafka", "MySQL", "Docker"],
    liveDemo: "#", // Replace with actual link
    github: "#", // Replace with actual link
    image: project2,
  },
  {
    id: 3,
    title: "AI Chatbot for Customer Support",
    description: "Built an AI-powered chatbot using NLP to assist customers with inquiries, improving response time by 60%.",
    techStack: ["Python", "Flask", "TensorFlow", "PostgreSQL"],
    liveDemo: "#", // Replace with actual link
    github: "#", // Replace with actual link
    image: project3,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio to showcase my projects, skills, and experience.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveDemo: "#", // Replace with actual link
    github: "#", // Replace with actual link
    image: project4,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 md:px-24 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
            <div className="flex flex-wrap mt-3">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
