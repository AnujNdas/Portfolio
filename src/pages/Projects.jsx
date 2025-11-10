import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import neurolink from "../assets/projects/neurolink.png";
import jobify from "../assets/projects/jobify.png";
import asset from "../assets/projects/asset.png";
const Projects = () => {
  const projects = [
    {
      name: "Neurolink AI",
      desc: "An AI-driven platform featuring an AI Lab, Dashboard, and Insights — merging automation with futuristic design.",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      image: neurolink,
      live: "https://neurolink-yftg.onrender.com",
      github: "https://github.com/AnujNdas/NeuroLink",
    },
    {
      name: "Jobify",
      desc: "A full-stack job portal for companies and individuals with modern UI, real-time chat, and admin analytics.",
      tech: ["MERN", "Socket.io", "Tailwind"],
      image: jobify,
      live: "https://jobify-frontend-2h7e.onrender.com",
      github: "https://github.com/AnujNdas/Jobify",
    },
    {
      name: "Asset Manager",
      desc: "An intelligent asset management system with responsive UI and inventory tracking using modern web tech.",
      tech: ["React", "Express", "MongoDB"],
      image: asset,
      live: "https://asset-manager-new-frontend.onrender.com",
      github: "https://github.com/AnujNdas/Asset-manager-new",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white px-8 md:px-20 py-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900/70 border border-cyan-500/20 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_#00ffff50] transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden rounded-xl group">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center rounded-xl transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
                />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 transition-all duration-300"
                >
                  Live <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Code <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
