import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FadeInOut = () => {
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 cursor-pointer mb-4"
        onClick={() => {
          setFadeOut(!fadeOut);
        }}
      >
        Toggle Card
      </button>

      <AnimatePresence>
        {fadeOut && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6 w-full max-w-70 mb-4 border border-gray-200 "
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
              Card Title
            </h2>
            <p className="text-gray-600">
              This is some supporting text that goes underneath the title.
              Clean, readable, and responsive.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default FadeInOut;
