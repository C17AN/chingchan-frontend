import Text from "@/components/common/ui/Text";
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
      <PraiseCountText>{targetPraiseCount}</PraiseCountText>
      <PraiseCountText>{currentPraiseCount}</PraiseCountText>
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

const PraiseCountText = styled(Text)``;

export default RunningGraph;
