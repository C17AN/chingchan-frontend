import { Variant, Variants } from "framer-motion";

export const variants: Variants = {
  FadeOutLeft: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 2,
    },
  },
  FadeIn: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 2,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};
