import { motion } from "framer-motion";
import { useState } from "react";

const FadeInOut = () => {
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={
          fadeOut
            ? { y: 20, opacity: 0 }
            : {
                y: 0,
                opacity: 1,
              }
        }
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.07,
          rotate: -1,
        }}
        className={`h-auto w-48 bg-yellow-300 border border-gray-300 shadow-lg p-4 rounded-lg ${
          fadeOut ? "" : "cursor-pointer"
        } ${!fadeOut ? "" : "select-none"} mb-4`}
      >
        <h2 className="text-center font-bold mb-1">Card Title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          laboriosam voluptas porro id accusamus non molestias dolorum corrupti
        </p>
      </motion.div>
      <button
        className="border-2 p-2 m-2"
        onClick={() => {
          setFadeOut(!fadeOut);
        }}
      >
        Toogle Card
      </button>
    </div>
  );
};
export default FadeInOut;
