import { motion } from "framer-motion";
import { useState } from "react";

const Toast = () => {
  const [toggleNotification, setToggleNotification] = useState(false);
  const openNotification = () => {
    setToggleNotification(true);
    setTimeout(() => {
      setToggleNotification(false);
    }, 3000);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.button
        className="p-2 bg-teal-600 text-black rounded cursor-pointer"
        onClick={openNotification}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        Click me
      </motion.button>

      <motion.div
        className="p-3 text-white bg-green-500 rounded fixed top-2 right-2"
        initial={{ opacity: 0, y: -20 }}
        animate={
          toggleNotification ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
        }
        transition={{ duration: 0.5 }}
      >
        Notification: Operation Succesful
      </motion.div>
    </div>
  );
};
export default Toast;
