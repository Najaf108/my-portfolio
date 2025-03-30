import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Real-time Weather App",
    description: "The weather app background changes with the weather of searched city.",
    image: "/weather.PNG", // Replace with an actual image URL
    link: "https://rad-swan-d872f3.netlify.app/",
    techStack: ["Vue", "CSS", "Weather API"]
  },
  {
    title: "E-commerce App",
    description: "An e-commerce platform frontend built with react.js and tailwindcss.",
    image: "/src/assets/e-commerce.PNG", // Replace with an actual image URL
    link: "https://luxury-kringle-a52a05.netlify.app/",
    techStack: ["React", "Tailwind CSS"]
  },
  {
    title: "Marketing Agency",
    description: "Marketing agency website frontend built with simple HTML, CSS and JavaScript.",
    image: "/src/assets/marketing.PNG", // Replace with an actual image URL
    link: "https://najaf108.github.io/marketing-agency/",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Admin Dashboard",
    description: "Dashboard frontend for admin built with React, tailwind and material UI.",
    image: "/src/assets/dashboard.PNG", // Replace with an actual image URL
    link: "#",
    techStack: ["React", "Tailwind CSS", "Material UI", "Chart.js"]
  },
  {
    title: "Real-time Chat app",
    description: "Users can chat in real-time built with websockets and react.js",
    image: "/src/assets/chatapp.PNG", // Replace with an actual image URL
    link: "#",
    techStack: ["React", "Socket.io", "Node.js", "Express.js"]
  },
  {
    title: "Point of Sale System",
    description: "A basic POS system frontend designed with vue.js and tailwindcss.",
    image: "/src/assets/pos.PNG", // Replace with an actual image URL
    link: "https://fascinating-marzipan-097cd6.netlify.app/",
    techStack: ["Vue", "Tailwind CSS",]
  },
];

const Projects = () => {
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
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
