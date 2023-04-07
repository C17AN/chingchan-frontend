import { Variant, Variants } from "framer-motion";

export const variants: Variants = {
  FadeOutLeft: {
    opacity: 0,
    x: "-100%",
  },
  FadeIn: {
    opacity: 1,
    y: 0,
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
