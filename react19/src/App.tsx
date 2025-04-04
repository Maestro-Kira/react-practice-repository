import { motion } from "motion/react";
import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="main">
      <motion.div
        className="circle"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={{
          duration: 1,
        }}
        onClick={() => setIsVisible(!isVisible)}
      />
    </div>
  );
};
export default App;
