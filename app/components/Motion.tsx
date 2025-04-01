import { motion } from "framer-motion";

const MotionTest = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-4xl font-extrabold text-center">Motion Test</h1>
    </motion.div>
  );
};

export default MotionTest;
