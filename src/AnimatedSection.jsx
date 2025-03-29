import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
