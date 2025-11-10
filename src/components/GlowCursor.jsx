// src/components/GlowCursor.jsx
import React, { useEffect, useState } from "react";

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-32 h-32 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-100"
      style={{
        transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
      }}
    ></div>
  );
};

export default GlowCursor;
