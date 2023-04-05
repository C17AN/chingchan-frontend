import styled from "@emotion/styled";
import { motion } from "framer-motion";
import colors from "material-colors";

type Props = {
  label?: string;
  bottomText?: string;
};

export const TextArea = ({ label }: Props) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <StyledTextArea />
    </div>
  );
};

const StyledTextArea = styled(motion.textarea)`
  padding: 4px 0;
  transition: 0.2s ease-in-out border-color;
  border: none;
  border-bottom: 1px solid transparent;
  font-size: 1rem;
  width: 100%;
  margin: 4px 0;
  resize: none;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.grey[700]};
  }
`;
