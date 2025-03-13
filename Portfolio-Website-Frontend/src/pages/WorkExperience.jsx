import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaServer, FaPython } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "D3E Studio, USA",
      duration: "Aug 2024 - Dec 2024",
      description: [
        "Developed REST APIs for job listings & profile-building platforms.",
        "Built interactive front-end components using React.js.",
      ],
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Nitya Software Solutions, India",
      duration: "Jun 2022 - Jun 2023",
      description: [
        "Designed & implemented scalable backend APIs with Java Spring Boot.",
        "Developed responsive front-end components in React.js, reducing load time.",
      ],
      icon: <FaServer className="text-blue-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Python Developer Intern",
      company: "AI Walkers, India",
      duration: "Aug 2021 - Jan 2022",
      description: [
        "Automated data processing tasks using Python, reducing workload by 40%.",
        "Optimized database queries & integrated APIs.",
      ],
      icon: <FaPython className="text-blue-500 text-3xl" />,
    },
  ];

  return (
    <section id="work-experience" className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 md:px-24 py-14">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        <FaBriefcase className="inline-block mr-3 text-blue-500" /> Work Experience
      </h2>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Experience Header */}
            <div className="flex items-center space-x-4 mb-4">
              {exp.icon}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
            </div>

            {/* Company & Duration */}
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>{exp.company}</strong> <br />
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </p>

            {/* Job Description */}
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              {exp.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
