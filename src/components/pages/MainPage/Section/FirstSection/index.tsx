import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container>
      <Title>오늘의 칭찬</Title>
      <Button
        css={css`
          width: 100%;
        `}
      >
        참 잘했어요!
      </Button>
    </Container>
  );
}

const Title = styled(motion.div)`
  font-size: 1.25rem;
  font-weight: 700;
`;
