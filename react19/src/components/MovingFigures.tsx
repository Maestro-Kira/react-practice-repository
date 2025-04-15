import { motion } from "framer-motion";
import { useState } from "react";

const MovingFigures = () => {
  const [redBtnClicked, setRedBtnClicked] = useState(false);

  const parentContainer = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  const redBox = {
    animate: {
      y: [0, -200, -200, -200, 100],
      x: [0, 0, 0, -5000, 0],
      scale: [1, 0.3, 0.3, 0.3, 1],
      rotate: 720,
      borderRadius: ["20%", "30%", "50%", "50%"],
      transition: {
        duration: 5,
        times: [0.1, 0.3, 0.7, 1],
        ease: "anticipate",
      },
    },
  };

  const yellowBox = {
    animate: {
      y: 100,
      transition: { duration: 1 },
    },
  };

  const greenBox = {
    animate: {
      x: 15,
      y: 4,
      rotate: 45,
      transition: { duration: 1.2 },
    },
  };

  return (
    <motion.div
      variants={parentContainer}
      initial="initial"
      animate={redBtnClicked ? "animate" : "initial"}
      className="flex justify-center items-center h-screen space-x-6 overflow-hidden"
    >
      <motion.div
        className="w-48 h-48 bg-red-600"
        variants={redBox}
        onClick={() => setRedBtnClicked(!redBtnClicked)}
      />
      <motion.div className="w-48 h-48 bg-yellow-400" variants={yellowBox} />
      <motion.div className="w-48 h-48 bg-green-800" variants={greenBox} />
    </motion.div>
  );
};

export default MovingFigures;
