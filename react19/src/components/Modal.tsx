import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <button
        className="mb-4 p-2 bg-teal-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex fixed inset-0 bg-black/50 justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-4 rounded max-w-3xl mx-6 "
              onClick={(e) => {
                e.stopPropagation();
              }}
              initial={{ y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-lg font-bold text-black mb-2">Modal Title</h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Provident
                dolore tenetur ipsam ea corrupti quae porro ratione nemo
                quibusdam necessitatibus illum ullam, neque in facilis veniam
                sit, ut,
              </p>
              <div className="flex justify-end">
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Modal;
