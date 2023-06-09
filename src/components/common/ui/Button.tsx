import React, { HTMLAttributes, PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";
import colors from "material-colors";
import { css } from "@emotion/react";

interface Props {
  onClick: () => void;
  size?: "small" | "medium" | "large";
  css?: any;
}

const buttonVariants: Variants = {
  pressed: {
    // scale: 0.98,
    filter: "brightness(0.9)",
  },
};

const Button = ({
  children,
  onClick,
  size = "medium",
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <StyledButton
      onClick={onClick}
      role="button"
      tabIndex={0}
      variants={buttonVariants}
      whileTap="pressed"
      size={size}
      {...props}
    >
      <div>{children}</div>
    </StyledButton>
  );
};

export const CTAButton = ({
  children,
  onClick,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Button
      onClick={onClick}
      css={css`
        width: 100%;
        margin-top: auto;
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

const StyledButton = styled(motion.button)<{
  size: "small" | "medium" | "large";
}>`
  background-color: ${colors.blue[200]};
  border-radius: 8px;
  padding: ${({ size }) => `
    ${
      size === "small"
        ? "8px 12px"
        : size === "medium"
        ? "12px 16px"
        : "16px 24px"
    }
  `};
  font-size: 1rem;
  color: ${colors.white};
  font-weight: 700;
  outline: none;
  border: none;
  transition: 0.04s ease-in-out transform;
  cursor: pointer;
`;

export default Button;
