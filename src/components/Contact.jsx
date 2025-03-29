import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="bg-gray-300 py-12 flex justify-center items-center min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-center text-gray-600 mb-8 text-xl">
          I’d love to hear from you! Whether you have a question or just want to
          say hello, feel free to drop me a message below.
        </p>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-200 shadow-lg rounded-lg p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium text-2xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium text-2xl"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
