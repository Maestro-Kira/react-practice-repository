import { motion, useMotionValue, useSpring } from "motion/react";
import { ChangeEvent } from "react";

const AnimateGallery = () => {
  const scale = useSpring(1);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(event.target.value));
  };
  return (
    <div>
      <motion.div className="circle" style={{ scale }} />

      <div className="mt-[6rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
export default AnimateGallery;
