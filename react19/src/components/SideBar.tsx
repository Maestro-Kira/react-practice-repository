import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SideBar = () => {
  const [toggleSideBar, setToggleSidebar] = useState(false);
  return (
    <div className="relative flex justify-center items-center h-screen">
      <AnimatePresence>
        {toggleSideBar && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: toggleSideBar ? "0%" : "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-64 h-full bg-emerald-700 flex flex-col justify-center items-center"
          >
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.97 }}
        className="bg-cyan-600 px-4 py-2 rounded text-white hover:bg-cyan-800 cursor-pointer"
        onClick={() => {
          setToggleSidebar(!toggleSideBar);
        }}
      >
        Toggle Sidebar
      </motion.button>
    </div>
  );
};
export default SideBar;
