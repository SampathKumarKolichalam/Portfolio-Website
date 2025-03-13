import { FaJava, FaPython, FaDatabase, FaReact, FaNodeJs, FaDocker, FaAws, FaLinux, FaGitAlt, FaCode, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiMysql, SiMongodb, SiSpringboot, SiFlask, SiDjango, SiTailwindcss, SiBootstrap, SiKubernetes, SiPostman, SiRedux, SiTypescript, SiSqlite } from "react-icons/si";
import { useSelector } from "react-redux";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-yellow-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
      { name: "SQL", icon: <FaDatabase className="text-purple-500" /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQLite", icon: <SiSqlite className="text-orange-500" /> },
      { name: "Spark SQL", icon: <FaDatabase className="text-yellow-500" /> },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3 className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "RESTful APIs", icon: <FaDatabase className="text-purple-500" /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
    ],
  },
  {
    category: "Tools & Debugging",
    skills: [
      { name: "Linux", icon: <FaLinux className="text-gray-500" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
      { name: "JUnit (Testing)", icon: <FaCode className="text-green-500" /> }, // Replaced SiJunit
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },
];

const Skills = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className={`min-h-screen p-10 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900 "}`}>
      <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center">
        <span className="text-yellow-500 text-5xl mr-2">💡</span> My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-gray-300"}`} // Adjusted for light mode
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-lg">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-gray-800 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
