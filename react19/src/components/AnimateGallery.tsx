import { motion } from "motion/react";

const AnimateGallery = () => {
  return (
    <div className="flex justify-center items-start mt-[30rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          className="bg-green-600 rounded-lg p-6 shadow-lg text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            scale: 1.1,
            opacity: 1,
            y: -200,
            backgroundColor: "orange",
          }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-black">Amazing card</h2>
          <p className="text-black-600">
            This card animates beautifully intot the view
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default AnimateGallery;
