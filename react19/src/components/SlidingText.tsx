import { motion } from "framer-motion";

const SlidingText = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.h1
        className="text-6xl text-black font-bold"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Sliding text
      </motion.h1>
    </div>
  );
};
export default SlidingText;
