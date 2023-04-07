import React, { HTMLAttributes } from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import styled from "@emotion/styled";
import colors from "material-colors";

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title?: string;
  onClose: () => void;
}

const animateVariants: Variants = {
  opacity0: {
    opacity: 0,
  },
  opacity100: {
    opacity: 1,
  },
  slideIn: {
    opacity: 1,
    y: [100, 0],
    transition: {
      duration: 0.3,
      bounceDamping: 100,
      bounce: 0.2,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
  },
};

const Modal = ({ open, onClose, title, children }: Props) => {
  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <ModalContainer
          className="modal-dimmer"
          onClick={handleOnClose}
          variants={animateVariants}
          animate={"opacity100"}
          exit={"opacity0"}
        >
          <ModalContent
            variants={animateVariants}
            className="modal-body"
            animate={"slideIn"}
            initial={"opacity0"}
            exit={"opacity0"}
          >
            <ModalTitle>{title}</ModalTitle>
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(motion.div)`
  width: 80%;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.grey[900]};
  font-weight: 700;
  margin-bottom: 12px;
`;

export default Modal;
