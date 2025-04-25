import { motion, useMotionValue, useSpring } from "framer-motion";

const HoverLinkedScale = () => {
  const scale = useSpring(1);

  return (
    <motion.div
      className="p-4 bg-blue-500 text-white rounded"
      onHoverStart={() => scale.set(1.2)}
      onHoverEnd={() => scale.set(1)}
      style={{ scale }}
    >
      Hover Me!
    </motion.div>
  );
};
export default HoverLinkedScale;
