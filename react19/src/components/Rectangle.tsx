import { motion } from "framer-motion";

const Rectangle = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="h-28 w-52 bg-green-800"
        whileTap={{ skewX: 20, skewY: 5 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};
export default Rectangle;
