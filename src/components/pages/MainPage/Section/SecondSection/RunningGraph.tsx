import Text from "@/components/common/ui/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "material-colors";
import React from "react";

type Props = {
  targetPraiseCount: number;
  currentPraiseCount: number;
};

const RunningGraph = ({ targetPraiseCount, currentPraiseCount }: Props) => {
  return (
    <Container className="running-status-graph">
      <PraiseCountText>{0}</PraiseCountText>
      <PraiseProgress />
      <PraiseCountText
        css={css`
          right: 0;
        `}
      >
        {targetPraiseCount}
      </PraiseCountText>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 16px;
  background-color: ${colors.grey[100]};
  box-shadow: 1px 1px 0 0 ${colors.grey[400] + "10"};
  border-radius: 30px;
`;

const PraiseProgress = styled.div``;

const PraiseCountText = styled(Text)`
  position: absolute;
  font-size: 0.625rem;
  bottom: -18px;
`;

export default RunningGraph;
