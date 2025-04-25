import { motion, useMotionValue, useSpring } from "framer-motion";

const DinamicRotation = () => {
  const rotate = useSpring(0);
  const rotateBox = () => {
    rotate.set(rotate.get() + 45);
  };
  return (
    <motion.div
      className="w-32 h-32 bg-blue-500 rounded"
      style={{ rotate }}
      onClick={rotateBox}
    >
      Click me
    </motion.div>
  );
};
export default DinamicRotation;
