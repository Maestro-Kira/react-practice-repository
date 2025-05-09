import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import titleVariants, {
  buttonContainerVariants,
  buttonVariants,
} from "./varients/arients";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="main__container">
      <div className="title__container">
        <AnimatePresence>
          {isVisible && (
            <motion.h1
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="title absolute"
            >
              Target text
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        variants={buttonContainerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col space-y-2 btn-div"
      >
        <motion.button
          variants={buttonVariants}
          onClick={() => setIsVisible(!isVisible)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="btn"
        >
          {isVisible ? "Hide Item" : "Show Item"}
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="btn"
        >
          Toggle text
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="btn"
        >
          Change Theme
        </motion.button>
      </motion.div>
    </div>
  );
};
export default App;
