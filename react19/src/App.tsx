import { motion } from "motion/react";

const App = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="main"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="circle"
          variants={childrenVariants}
        />
      ))}
    </motion.div>
  );
};
export default App;
