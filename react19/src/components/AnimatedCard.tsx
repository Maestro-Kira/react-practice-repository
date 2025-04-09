import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      drag
      dragConstraints={{
        top: -50,
        bottom: 50,
        left: -50,
        right: 50,
      }}
      dragElastic={0.2}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer"
    >
      <img
        className="w-full h-48 object-cover object-center"
        src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Card Title
        </h2>

        <p className="text-sm text-gray-600 mt-2 mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum
          expedita nesciunt voluptatibus sint veniam vero corrupti cupiditate
          dolor beatae!
        </p>

        <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-300 transition-colors duration-300 ease-in-out">
          Learn more
        </button>
      </div>
    </motion.div>
  );
};
export default AnimatedCard;
