import Text from "@/components/common/ui/Text";
import React from "react";
import { Spacing } from "@toss/emotion-utils";
import colors from "material-colors";
import { CTAButton } from "@/components/common/ui/Button";

type Props = {};

const ThirdStep = () => {
  return (
    <>
      <Text typography="h1">이제 칭찬할 시간이에요!</Text>
      <Spacing size={8} />
      <Text typography="p" color={colors.grey[800]}>
        칭찬할 상대방의 아이디를 입력하거나
        <br />
        QR 인증을 통해 등록해주세요.
      </Text>
      <CTAButton onClick={() => {}}>다음으로</CTAButton>
    </>
  );
};

export default ThirdStep;