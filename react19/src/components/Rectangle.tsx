import { motion } from "framer-motion";
import { useState } from "react";

const Rectangle = () => {
  const [changeRectangle, setChangeRectangle] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="h-28 w-52 bg-green-800"
        onClick={() => setChangeRectangle(!changeRectangle)}
        animate={{
          skewX: changeRectangle ? 20 : 0,
        }}
        transition={{
          duration: 1,
        }}
      />
    </div>
  );
};
export default Rectangle;
