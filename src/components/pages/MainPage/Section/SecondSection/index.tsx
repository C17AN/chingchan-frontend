import Text from "@/components/common/ui/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "material-colors";
import React from "react";
import { Spacing } from "@toss/emotion-utils";
import RunningGraph from "./RunningGraph";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div>
      <RunningStatus>
        <Text
          typography="p"
          css={css`
            font-size: 0.875rem;
            font-weight: 700;
            margin-bottom: 4px;
          `}
        >
          냠냠이의 뽀뽀까지
        </Text>
        <Text>남은 칭찬 점수 : 20번</Text>
        <Spacing size={8} />
        <RunningGraph targetPraiseCount={20} currentPraiseCount={10} />
        <Spacing size={20} />
      </RunningStatus>
    </div>
  );
};

const RunningStatus = styled.div`
  border-radius: 4px;
  border: 1px solid ${colors.grey[300]};
  padding: 12px;
`;

export default SecondSection;
