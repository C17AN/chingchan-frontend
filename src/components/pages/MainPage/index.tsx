import Button from "@/components/common/ui/Button";
import Container from "@/components/common/ui/Container";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
import PraiseReasonModal from "./PraiseReasonModal";
import FirstSection from "./Section/FirstSection";
import SecondSection from "./Section/SecondSection";

export default function Main() {
  const [praiseReasonModalOpen, setPraiseModalOpen] = useState<boolean>(false);
  return (
    <Container>
      <FirstSection />
      {/* <SecondSection /> */}
      <Button
        onClick={() => {}}
        css={css`
          margin-top: auto;
          width: 100%;
        `}
      >
        냠냠이 칭찬하기
      </Button>
      <PraiseReasonModal
        open={praiseReasonModalOpen}
        onClose={() => setPraiseModalOpen(() => false)}
      />
    </Container>
  );
}

const Title = styled(motion.div)`
  font-size: 1.25rem;
  font-weight: 700;
`;

Main.requireAuth = true;
