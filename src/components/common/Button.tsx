import React, { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";
import colors from "material-colors";

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode;
}

const buttonVariants: Variants = {
  pressed: {
    scale: 0.98,
  },
};

const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      role="button"
      tabIndex={0}
      variants={buttonVariants}
      whileTap="pressed"
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)`
  background-color: var(--primary-bg-color);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  color: ${colors.white};
  font-weight: 700;
  outline: none;
  border: none;
  transition: 0.04s ease-in-out transform;
  cursor: pointer;
`;

export default Button;
