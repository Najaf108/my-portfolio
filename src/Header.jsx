import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-22">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Najaf Ikram
        </motion.div>

        {/* Navigation Menu */}
        <nav>
          <motion.ul
            className="flex space-x-6 text-xl font-medium"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {item==="Home" ? <NavLink to={`/`}>{item}</NavLink> : <NavLink to={`/${item}`}>{item}</NavLink>}
                </motion.li>
              )
            )}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
