import React, { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "@/styles/animations/variants";
import styled from "@emotion/styled";

type Props = {
  visible: boolean;
};

const FadeoutLeftOnExit = ({ visible, children }: PropsWithChildren<Props>) => {
  return visible ? (
    <Container
      variants={variants}
      initial={"hidden"}
      animate={{ opacity: 1 }}
      exit={"FadeOutLeft"}
    >
      {children}
    </Container>
  ) : null;
};

const Container = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default FadeoutLeftOnExit;
