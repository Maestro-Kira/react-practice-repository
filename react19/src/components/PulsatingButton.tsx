import { motion } from "framer-motion";

const PulsatingButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="p-4 bg-green-500 text-white rounded"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        Pulsating Button
      </motion.div>
    </div>
  );
};
export default PulsatingButton;
