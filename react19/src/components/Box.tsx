import { motion } from "framer-motion";

const Box = () => {
  return (
    <div className="flex items-center h-screen">
      <motion.div
        animate={{
          x: [0, "calc(100vw - 128px)", 0],
          rotate: [0, 360, 0],
          borderRadius: [0, "100%", 0],
          backgroundColor: ["#000000", "#00FF00", "#000000"],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="w-32 h-32 bg-black text-white flex justify-center items-center "
      >
        <h2>hello there!</h2>
      </motion.div>
    </div>
  );
};
export default Box;
