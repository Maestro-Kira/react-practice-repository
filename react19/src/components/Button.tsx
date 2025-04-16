import { motion } from "framer-motion";

const Button = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.button
        whileTap={{ scale: 0.9, backgroundColor: "#115e59" }}
        whileHover={{ scale: 1.1 }}
        className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer "
      >
        Click me!
      </motion.button>
    </div>
  );
};
export default Button;
