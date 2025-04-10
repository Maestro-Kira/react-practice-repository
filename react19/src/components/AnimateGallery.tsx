import { motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1696221734265-d2020cffa479?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659298621805-0f66648c4f7a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxPemNMV2dLQXRXVXx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1654749230670-05e979f04363?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8T3pjTFdnS0F0V1V8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718604271841-77a562fda5e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8T3pjTFdnS0F0V1V8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww",
];

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimateGallery = () => {
  const [showImages, setImages] = useState(false);

  const handleClick = () => {
    setImages((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold"
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
        className="flex w-64 space-x-3 h-auto "
      >
        {galleryImages.map((image, index) => (
          <motion.img
            variants={childVariants}
            src={image}
            alt={`Gallery image number ${index + 1}`}
            className="rounded-2xl w-full"
          />
        ))}
      </motion.div>
    </div>
  );
};
export default AnimateGallery;
