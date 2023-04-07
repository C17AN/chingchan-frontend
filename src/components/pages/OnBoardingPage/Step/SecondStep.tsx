import Text from "@/components/common/ui/Text";
import React from "react";
import { Spacing } from "@toss/emotion-utils";
import colors from "material-colors";
import { CTAButton } from "@/components/common/ui/Button";

type Props = {
  완료: () => void;
};

const SecondStep = ({ 완료 }: Props) => {
  return (
    <>
      <Text typography="h1">칭찬 파트너 찾기</Text>
      <Spacing size={8} />
      <Text typography="p" color={colors.grey[800]}>
        칭찬할 상대방의 아이디를 입력하거나
        <br />
        QR 인증을 통해 등록해주세요.
      </Text>
      <CTAButton onClick={완료}>다음으로</CTAButton>
    </>
  );
};

export default SecondStep;
