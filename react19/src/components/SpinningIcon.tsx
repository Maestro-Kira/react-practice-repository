import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";
const SpinningIcon = () => {
  const MotionSpinner = motion(CgSpinner);

  return (
    <div className="flex items-center justify-center h-screen">
      <MotionSpinner
        size={70}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  );
};
export default SpinningIcon;
