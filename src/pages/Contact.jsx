import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white px-8 md:px-20 py-20 relative overflow-hidden">
      {/* Floating Glow Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Get In{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Touch
        </span>
      </motion.h2>

      {/* Contact Content */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Info */}
        <motion.div
          className="flex-1 flex flex-col gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <p className="text-gray-300">anujd339@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-cyan-400 text-2xl" />
            <p className="text-gray-300">+91 8709233612</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
            <p className="text-gray-300">Jamshedpur, Jharkhand, India</p>
          </div>

          <p className="mt-6 text-gray-400">
            I'm always open to collaborating on interesting projects or discussing new ideas.
          </p>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          className="flex-1 bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_30px_#00ffff40] border border-cyan-500/20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-lg bg-gray-800/50 border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 rounded-lg bg-gray-800/50 border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full mt-2 p-3 rounded-lg bg-gray-800/50 border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 text-white font-semibold shadow-[0_0_20px_#00ffff80]"
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
