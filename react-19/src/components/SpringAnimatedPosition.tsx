import { motion, useMotionValue, useSpring } from "framer-motion";

const SpringAnimatedPosition = () => {
  const x = useSpring(0);
  const y = useSpring(0);
  const moveBox = () => {
    x.set(Math.random() * 500);
    y.set(Math.random() * 500);
  };
  return (
    <div>
      <motion.div
        style={{ x, y }}
        onClick={moveBox}
        className="w-32 h-32 bg-blue-500 rounded"
      >
        CLICK
      </motion.div>
    </div>
  );
};
export default SpringAnimatedPosition;
