import { motion } from "framer-motion";

const BackgroundColorChanger = () => {
  return (
    <motion.div
      className=" w-screen h-screen flex justify-center items-center "
      animate={{
        backgroundColor: [
          "oklch(0.278 0.033 256.848)",
          "oklch(0.527 0.154 150.069)",
          "oklch(0.52 0.105 223.128)",
          "oklch(0.514 0.222 16.935)",
          "oklch(0.278 0.033 256.848)",
        ],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    ></motion.div>
  );
};
export default BackgroundColorChanger;
