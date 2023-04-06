import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Spacing } from "@toss/emotion-utils";
import colors from "material-colors";
import FirstSection from "./Section/FirstSection";
import SecondSection from "./Section/SecondSection";

export default function Main() {
  return (
    <Container>
      <FirstSection />
      <SecondSection />
      <Button
        css={css`
          margin-top: auto;
          width: 100%;
        `}
      >
        냠냠이 칭찬하기
      </Button>
    </Container>
  );
}

const Title = styled(motion.div)`
  font-size: 1.25rem;
  font-weight: 700;
`;

Main.requireAuth = true;
