import { motion } from "framer-motion";

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FadeIn = () => {
  return (
    <motion.div
      className="bg-blue-500 p-4 rounded shadow"
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
    >
      <h2 className="text-white">Fade In Component</h2>
    </motion.div>
  );
};
export default FadeIn;
