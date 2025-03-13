import { motion } from "framer-motion";
import profilePic from "../assets/Profile.jpg";
import { FaGraduationCap, FaBriefcase, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-center md:items-start justify-between min-h-[85vh] px-6 md:px-20 bg-gray-100 dark:bg-gray-900 py-16 transition-all duration-300"
      >
        {/* Left Side - Profile Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-lg border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Right Side - About Me Content */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col space-y-6 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            <FaUser className="text-blue-500 mr-2" /> About Me
          </h2>

          {/* Bio */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a <strong>Full Stack Developer</strong> with expertise in <strong>React.js, Node.js, and Spring Boot</strong>.
            I have experience in building scalable applications, designing APIs, and implementing
            <strong> frontend & backend solutions</strong>. Passionate about <strong>problem-solving, AI, and DevOps</strong>.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500">Skills</h3>
            <ul className="grid grid-cols-2 gap-y-4 text-lg text-gray-700 dark:text-gray-300 mt-4">
              <li>🚀 React.js, Redux Toolkit</li>
              <li>🌐 Node.js, Express.js</li>
              <li>☕ Java, Spring Boot, Microservices</li>
              <li>💾 MySQL, MongoDB, Spark SQL</li>
              <li>📜 REST APIs, Flask, Django</li>
              <li>⚙️ Docker, Kubernetes, AWS</li>
              <li>🔍 JUnit, Postman (API Testing)</li>
              <li>💡 Linux, Git, System Administration</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Education Section - Now properly aligned */}
      <section className="w-full px-6 md:px-20 bg-gray-100 dark:bg-gray-900 py-16 -mt-16">
        <h3 className="text-3xl font-semibold text-blue-500 flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h3>
        <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
          <p className="flex items-center space-x-2">
            🎓 <strong>Master of Science in Computer Science</strong>
          </p>
          <p className="ml-6 text-base">
            Kent State University, Ohio (GPA: 3.8/4) (Aug 2023 - Dec 2024)
          </p>

          <p className="flex items-center space-x-2 mt-6">
            🎓 <strong>B.Tech in Computer Science & Engineering</strong>
          </p>
          <p className="ml-6 text-base">
            Lingaya’s Vidyapeeth, Delhi, India (CGPA: 9.2/10) (Aug 2019 - Jun 2023)
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="px-6 md:px-20 bg-gray-100 dark:bg-gray-900 py-16 -mt-16">
        <h3 className="text-3xl font-semibold text-blue-500 flex items-center">
          <FaBriefcase className="mr-2" /> Work Experience
        </h3>
        <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed mt-6">
          <li>
            💼 <strong>Full Stack Developer Intern - D3E Studio, USA (Aug 2024 - Dec 2024)</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>Developed REST APIs for job listings & profile-building platforms.</li>
              <li>Built interactive front-end components using React.js.</li>
            </ul>
          </li>

          <li>
            💼 <strong>Full Stack Developer - Nitya Software Solutions, India (Jun 2022 - Jun 2023)</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>Designed & implemented <strong>scalable backend APIs</strong> with Java Spring Boot.</li>
              <li>Developed responsive front-end components in React.js, reducing load time.</li>
            </ul>
          </li>

          <li>
            💼 <strong>Python Developer Intern - AI Walkers, India (Aug 2021 - Jan 2022)</strong>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automated <strong>data processing tasks</strong> using Python, reducing workload by 40%.</li>
              <li>Optimized database queries & integrated APIs.</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;
