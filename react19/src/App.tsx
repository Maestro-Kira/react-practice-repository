import { motion } from "motion/react";

const App = () => {
  return (
    <div className="main">
      <motion.div
        className="circle"
        initial={{ x: -400 }}
        animate={{ x: 200 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};
export default App;
