import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="w-16 h-16 rounded-full bg-green-700"
        animate={{ y: [0, -100, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.div>
    </div>
  );
};
export default BouncingBall;
