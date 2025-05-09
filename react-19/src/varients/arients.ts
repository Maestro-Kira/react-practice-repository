const titleVariants = {
  initial: { y: -100, opacity: 0, scale: 0 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: "easeInOut", duration: 0.7 },
  },
  exit: {
    y: -100,
    opacity: 0,
    scale: 0,
    transition: { ease: "easeInOut", duration: 0.7 },
  },
};

export const buttonContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const buttonVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default titleVariants;
