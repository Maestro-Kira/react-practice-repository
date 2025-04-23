import { motion } from "framer-motion";

const DraggableBox = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-cyan-500 rounded-lg shadow-lg"
      drag
      dragConstraints={{
        left: 0,
        right: 300,
        top: 0,
        bottom: 300,
      }}
    />
  );
};
export default DraggableBox;
