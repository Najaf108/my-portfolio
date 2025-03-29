import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: "/src/assets/html.png", // Replace with an actual HTML icon URL
    description: "Proficient in creating semantic and accessible web structures.",
  },
  {
    name: "CSS",
    icon: "/src/assets/css-3.png", // Replace with an actual CSS icon URL
    description: "Expert in responsive design and modern CSS frameworks like Tailwind.",
  },
  {
    name: "JavaScript",
    icon: "/src/assets/js.png", // Replace with an actual JS icon URL
    description: "Skilled in ES6+ syntax and building interactive web applications.",
  },
  {
    name: "React.js",
    icon: "/src/assets/react.svg", // Replace with an actual React icon URL
    description: "Experienced in creating dynamic, component-based user interfaces.",
  },
  {
    name: "Node.js",
    icon: "/src/assets/node-js.png", // Replace with an actual Node.js icon URL
    description: "Capable of building scalable backend services and REST APIs.",
  },
  {
    name: "Vue.js",
    icon: "/src/assets/vue.png", 
    description: "Skilled in building dynamic and interactive user interfaces.",
  },
  {
    name: "Web Sockets",
    icon: "/src/assets/web-socket.png", 
    description: "Skilled in building dynamic and interactive user interfaces.",
  },
  {
    name: "Material UI",
    icon: "/src/assets/material-ui.png", 
    description: "Skilled in building dynamic and interactive user interfaces.",
  },
  {
    name: "Tailwind CSS",
    icon: "/src/assets/tailwind.png", 
    description: "Skilled in building dynamic and interactive user interfaces.",
  },
  {
    name: "Bootstrap",
    icon: "/src/assets/bootstrap.png", 
    description: "Skilled in building dynamic and interactive user interfaces.",
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-300 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.name}
              </h3>
              {/* <p className="text-center text-gray-600">{skill.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
