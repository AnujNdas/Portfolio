import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaRobot } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import profile from "../assets/projects/profile.jpg"
const About = () => {
  const techStack = [
    { icon: <FaReact className="text-cyan-400 text-4xl" />, name: "React" },
    { icon: <SiJavascript className="text-yellow-400 text-4xl" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-sky-400 text-4xl" />, name: "TailwindCSS" },
    { icon: <FaNodeJs className="text-green-500 text-4xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400 text-4xl" />, name: "MongoDB" },
    { icon: <FaRobot className="text-purple-400 text-4xl" />, name: "AI / ML" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-8 md:px-20 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Profile Image */}
          <motion.div
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_25px_#00ffff80]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px #00ffffb0",
            }}
          >
            <img
              src={profile}
              alt="Anuj Kumar Das"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bio */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hey, I’m{" "}
              <span className="text-cyan-400 font-semibold">Anuj Kumar Das</span>
              — a passionate developer who loves building intelligent and futuristic
              digital experiences. With a strong foundation in the{" "}
              <span className="text-purple-400">MERN stack</span> and a growing
              curiosity in AI and automation, I blend creativity with logic to craft
              meaningful software solutions.
            </p>
            <p className="text-gray-400 mt-4">
              I’ve worked on projects like <strong>Jobify</strong>,{" "}
              <strong>Neurolink</strong>, and an <strong>Asset Management System</strong>,
              focusing on seamless UI/UX and efficient backend integration.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-900/60 hover:bg-gray-800/80 shadow-[0_0_15px_#00ffff40] transition-all duration-300"
            >
              {tech.icon}
              <p className="text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
