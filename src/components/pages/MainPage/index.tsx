import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Spacing } from "@toss/emotion-utils";
import colors from "material-colors";

export default function Home() {
  return (
    <Container>
      <Title>오늘의 칭찬</Title>
      <Spacing size={8} />
      <div
        css={css`
          font-size: 0.875rem;
          color: ${colors.grey[600]};
        `}
      >
        아직 칭찬을 하지 않았어요.
      </div>
      <Spacing size={12} />
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
