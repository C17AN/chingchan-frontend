import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { variants } from "@/styles/animations/variants";

type Props = {};

const FadeoutLeft = ({ children }: PropsWithChildren<Props>) => {
  return (
    <motion.div variants={variants} exit={"FadeOutLeft"}>
      {children}
    </motion.div>
  );
};

export default FadeoutLeft;
