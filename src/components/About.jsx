import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-300 text-gray-800 px-6 py-12">
      {/* Image Section */}
      <motion.div
        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/src/assets/Najaf.png"
          alt="About Me"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-2xl text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-xl text-gray-700 mb-6">
          Hi, I'm Najaf Ikram, a passionate web developer with a knack for creating 
          modern and user-friendly websites. I specialize in building responsive 
          designs and delivering exceptional user experiences.
        </p>
        <p className="text-xl text-gray-700 mb-6">
          With expertise in React.js, Tailwind CSS, and other cutting-edge 
          technologies, I have worked on various projects, from simple 
          portfolios to complex web applications. My goal is to turn ideas into 
          reality through innovative design and code.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          <NavLink to='/contact'>Contact Me</NavLink>
        </button>
      </motion.div>
    </div>
  );
};

export default About;

  