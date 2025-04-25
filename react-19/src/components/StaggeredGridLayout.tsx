import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const text = "Fallen Land: Mission Control";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredGridLayout = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");

    const timer = setTimeout(() => {
      controls.start({
        y: -250,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }, text.length * 100 + 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.h1
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
      className="text-4xl font-bold text-white"
    >
      {text.split("").map((char, index) => (
        <motion.span variants={staggerVariants} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default StaggeredGridLayout;
