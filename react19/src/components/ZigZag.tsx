import { motion } from "framer-motion";

const ZigZag = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        className="w-16 h-16 bg-green-500 flex justify-center items-center"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, 50, 0, 50, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ZigZag
      </motion.div>
    </div>
  );
};
export default ZigZag;
