// src/pages/Resume.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050510] via-[#0b0b25] to-[#090921] text-white px-6 py-20 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_#00f5ff80]">
          Resume
        </h1>
        <p className="text-gray-400 mt-3 text-base">
          A modern overview of my education, experience, and technical skills.
        </p>
        <div className="mx-auto mt-4 w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
      </motion.div>

      {/* About Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto text-center mb-16 text-gray-300"
      >
        <p className="leading-relaxed">
          I’m <span className="text-cyan-400 font-semibold">Anuj Kumar Das</span>, 
          a frontend-focused developer passionate about creating intelligent, 
          futuristic web experiences using modern technologies and clean design systems.
        </p>
      </motion.div>

      {/* Experience & Education */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Experience Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-[#101030]/50 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_20px_#00f5ff20] hover:shadow-[0_0_25px_#00f5ff50] transition-all duration-500"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-5">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Freelancer</h3>
              <p className="text-gray-400 text-sm">Frontend Developer | 2023–Present</p>
              <p className="text-gray-500 text-sm mt-1">
                Designed and built dynamic user interfaces for clients using React, 
                TailwindCSS, and Node.js. Delivered responsive, high-performance web solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Junior Frontend Developer</h3>
              <p className="text-gray-400 text-sm">Worked under an individual | 2024</p>
              <p className="text-gray-500 text-sm mt-1">
                Built and optimized dashboards, login flows, and admin panels 
                for MERN-stack applications with clean UI and state management.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-[#101030]/50 backdrop-blur-md border border-blue-400/20 shadow-[0_0_20px_#007bff20] hover:shadow-[0_0_25px_#00aaff50] transition-all duration-500"
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-5">Education</h2>
          <div>
            <h3 className="text-lg font-semibold">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-gray-400 text-sm">Srinath University | 2022–2025</p>
            <p className="text-gray-500 text-sm mt-1">
              Specialized in software development, AI-based systems, and 
              full-stack web applications.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Technical Skills */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-semibold text-cyan-300 mb-10">Technical Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {[
            { icon: <FaReact />, color: "text-cyan-400" },
            { icon: <FaNodeJs />, color: "text-green-400" },
            { icon: <SiMongodb />, color: "text-green-500" },
            { icon: <FaHtml5 />, color: "text-orange-500" },
            { icon: <FaCss3Alt />, color: "text-blue-400" },
            { icon: <SiTailwindcss />, color: "text-cyan-300" },
            { icon: <FaPython />, color: "text-yellow-400" },
            { icon: <FaJsSquare />, color: "text-yellow-300" },
            { icon: <FaDatabase />, color: "text-violet-400" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className={`text-5xl ${skill.color} transition-transform duration-300`}
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download Resume */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center"
      >
        <a
          href="/Anuj_Kumar_Das_Resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border border-cyan-400/40 px-8 py-3 rounded-full text-cyan-300 font-medium hover:text-white hover:shadow-[0_0_20px_#00f5ff60] transition-all duration-500"
        >
          <FaDownload className="text-lg" /> Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Resume;
