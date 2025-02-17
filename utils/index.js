import { easeOut } from "framer-motion";

export const slideXContainer = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

export const tween = {
  type: "tween",
  ease: easeOut,
  duration: 0.2,
};

export const slideYContainer = {
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const SlideUp = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
