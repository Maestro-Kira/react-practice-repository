import { motion } from "motion/react";

const Circle = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        animate={{
          y: [0, -150, 0],
          scaleY: [1, 1.2, 0.8, 1],
          scaleX: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.6, 1], // timing for squash and stretch
        }}
        className="circle"
      ></motion.div>
    </div>
  );
};
export default Circle;
