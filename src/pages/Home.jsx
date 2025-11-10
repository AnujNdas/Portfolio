import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import profile from "../assets/projects/profile.jpg"
const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Floating AI Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 right-20 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-500/10 blur-2xl rounded-full"
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>
      </div>

      {/* Left Side - Text */}
      <motion.div
        className="flex-1 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Anuj Kumar Das
          </span>
        </h1>

        {/* Typing Effect */}
        <div className="text-xl md:text-2xl mt-3 text-cyan-300 font-semibold h-[40px]">
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

        <p className="mt-4 text-lg text-gray-300 max-w-md">
          Building futuristic digital experiences that merge creativity with
          intelligence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <motion.a
            href="/projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 flex items-center gap-2 shadow-[0_0_15px_#00ffff70]"
            whileHover={{ scale: 1.05 }}
          >
            Explore Projects <FaArrowRight />
          </motion.a>
          <motion.a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500/10"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="flex-1 mt-12 md:mt-0 flex justify-center relative"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Glowing border + pulse */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_25px_#00ffff80]"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px #00ffffb0",
          }}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full ring-4 ring-purple-500/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
