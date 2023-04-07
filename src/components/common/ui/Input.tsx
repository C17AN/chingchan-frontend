import { variants } from "@/styles/animations/variants";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import colors from "material-colors";
import Text from "./Text";

type Props = {
  label?: string;
  bottomText?: string;
};

export const Input = ({ label, bottomText }: Props) => {
  return (
    <Container className="input">
      {label && <Text>{label}</Text>}
      <StyledInput />
      <AnimatePresence>
        {bottomText && (
          <motion.p
            variants={variants}
            initial="hidden"
            exit="hidden"
            animate="visible"
            className="input__bottom-text"
          >
            {bottomText}
          </motion.p>
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  .input__bottom-text {
    font-size: 0.8rem;
    color: ${colors.red[500]};
    margin-top: 4px;
  }
`;

const StyledInput = styled(motion.input)`
  padding: 4px 0;
  transition: 0.2s ease-in-out border-color;
  border: none;
  border-bottom: 1px solid transparent;
  font-size: 1rem;
  width: 100%;
  margin: 4px 0;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.grey[700]};
  }
`;
