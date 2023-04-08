import Text from "@/components/common/ui/Text";
import React from "react";
import { Spacing } from "@toss/emotion-utils";
import colors from "material-colors";
import { CTAButton } from "@/components/common/ui/Button";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

type Props = {
  처음으로: () => void;
};

const ThirdStep = ({ 처음으로 }: Props) => {
  const router = useRouter();
  return (
    <>
      <Text
        typography="h1"
        css={css`
          font-size: 32px;
          margin: auto 0;
          text-align: center;
        `}
      >
        이제 칭찬할 시간이에요!
      </Text>
      <Spacing size={8} />
      <Text typography="p" color={colors.grey[800]}></Text>
    </>
  );
};

export default ThirdStep;
