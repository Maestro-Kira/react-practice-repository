import { motion } from "framer-motion";

const Square = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        className="h-48 w-48 "
        animate={{
          backgroundColor: [
            "#800080",
            "#00FF00",
            "#FFA500",
            "#FF0000",
            "#800080",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      ></motion.div>
    </div>
  );
};
export default Square;
