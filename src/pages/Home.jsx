import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import profile from "../assets/projects/profile.jpg";
import FloatingOrbs from "../components/FloatingOrbs";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden flex items-center">
      {/* ===== Floating Orbs Background ===== */}
<div className="absolute inset-0 z-0 overflow-hidden">
  {/* Gradient blobs first */}
  <motion.div
    className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full"
    animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
  />
  <motion.div
    className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-purple-600/25 blur-[160px] rounded-full"
    animate={{ y: [0, -40, 0], x: [0, -25, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
  />

  {/* Floating orbs ABOVE blobs */}
  <div className="absolute inset-0 z-10">
    <FloatingOrbs />
  </div>
</div>



      {/* ===== Main Content Grid ===== */}
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* ==== Left Text Section ==== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-5 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Anuj Kumar Das
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-cyan-300 font-semibold h-[40px]">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "AI Explorer",
                  "Creative Coder",
                  "Visionary Designer",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-gray-300 text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
            Building futuristic, intelligent interfaces that merge creativity
            with next-generation technology.
          </p>

          <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="/projects"
              className="group px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center gap-2 font-medium shadow-[0_0_25px_#00ffff50]"
              whileHover={{ scale: 1.06 }}
            >
              Explore Projects{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/contact"
              className="px-7 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm transition"
              whileHover={{ scale: 1.06 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* ==== Right Profile Section ==== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          {/* Neon Frame Container */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-cyan-400/50 bg-gradient-to-br from-gray-800/30 to-black/60 shadow-[0_0_40px_#00ffff40] backdrop-blur-md"
          >
            {/* Profile Image */}
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-300"
            />

            {/* Neon ring and reflections */}
            <div className="absolute inset-0 rounded-3xl ring-2 ring-cyan-400/30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent mix-blend-overlay"></div>
          </motion.div>

          {/* Floating particle glow */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-400/20 blur-3xl rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
