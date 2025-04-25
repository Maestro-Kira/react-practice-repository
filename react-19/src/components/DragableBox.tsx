import { motion, useMotionValue, useSpring } from "framer-motion";

const DragableBox = () => {
  const x = useSpring(0);
  const y = useSpring(0);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded"
        drag
        style={{ x, y }}
      />

      <p className="somedtsshsing">
        Position: ({x.get().toFixed(2)}, {y.get().toFixed(2)})
      </p>
    </div>
  );
};
export default DragableBox;
