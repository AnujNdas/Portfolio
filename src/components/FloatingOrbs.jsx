import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingOrbs = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const orbs = Array.from({ length: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {orbs.map((_, i) => {
        const size = Math.random() * 80 + 30;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 80 + 60; // 🐢 very slow (60–140s)

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
              top: `${startY}%`,
              background: `radial-gradient(circle at 30% 30%, rgba(0,255,255,0.4), rgba(128,0,255,0.25), transparent)`,
              boxShadow: `0 0 100px 35px rgba(0,255,255,0.1)`,
              filter: "blur(30px)",
            }}
            animate={{
              x: [
                mousePos.x * (Math.random() * 10 - 5),
                Math.random() * 10 - 5,
                0,
              ],
              y: [
                mousePos.y * (Math.random() * 10 - 5),
                Math.random() * 10 - 5,
                0,
              ],
              opacity: [0.3, 0.6, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingOrbs;
