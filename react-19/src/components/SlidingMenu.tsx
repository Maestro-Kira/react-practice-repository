import { motion } from "framer-motion";
import { useState } from "react";

const menuVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="p-2 bg-gray-500 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle menu
      </button>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-64 h-full bg-blue-500"
      >
        <ul className="p-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};
export default SlidingMenu;
