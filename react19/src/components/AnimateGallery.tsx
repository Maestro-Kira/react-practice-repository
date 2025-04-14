import { motion, useMotionValue, useTransform } from "framer-motion";

const AnimateGallery = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Scale changes from 0.5 to 2 based on x position
  const opacity = useTransform(x, [-100, 100], [0.4, 1]);

  const scale = useTransform(y, [-100, 100], [0.2, 1.2]);

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        style={{
          x,
          y,
          opacity,
          scale,
          width: 100,
          height: 100,
          backgroundColor: "skyblue",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          cursor: "grab",
        }}
      >
        Drag me
      </motion.div>
    </div>
  );
};

export default AnimateGallery;
