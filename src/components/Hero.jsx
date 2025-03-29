import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Najaf</span>
      </motion.h1>

      {/* Typed Text Animation */}
      <ReactTyped
        className="text-xl md:text-3xl text-gray-300"
        strings={["Web Developer", "React JS Developer", "Front-End Developer", "Vue JS developer"]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />

      {/* Hero Description */}
      <motion.p
        className="mt-6 text-center max-w-xl text-gray-400 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I build responsive, modern, and user-friendly websites. Let’s bring your ideas to life with creative solutions!
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.button
        className="mt-8 px-8 py-3 bg-blue-500 rounded-lg font-medium text-white hover:bg-blue-700 transition"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <NavLink to='/projects'>View My Work</NavLink>
      </motion.button>

      {/* Optional Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="w-32 h-32 bg-blue-300 rounded-full absolute top-10 left-10 opacity-40 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="w-48 h-48 bg-blue-300 rounded-full absolute bottom-20 right-20 opacity-40 blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>
    </div>
  );
};

export default Hero;

