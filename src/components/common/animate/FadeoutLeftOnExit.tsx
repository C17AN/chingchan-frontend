import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { variants } from "@/styles/animations/variants";
import styled from "@emotion/styled";

type Props = {};

const FadeoutLeftOnExit = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Container
      variants={variants}
      initial={"visible"}
      animate={"FadeIn"}
      exit={"FadeOutLeft"}
    >
      {children}
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default FadeoutLeftOnExit;
