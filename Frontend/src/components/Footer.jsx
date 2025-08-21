import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} TaskManager. All rights reserved.
        </p>

        {/* Right Links */}
        <div className="flex gap-4 mt-2 md:mt-0 text-sm">
          <a
            href="#"
            className="hover:text-indigo-400 transition">
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-indigo-400 transition">
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-indigo-400 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
