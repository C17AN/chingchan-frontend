import Text from "@/components/common/ui/Text";
import React from "react";
import { Spacing } from "@toss/emotion-utils";
import colors from "material-colors";
import { CTAButton } from "@/components/common/ui/Button";
import { useRouter } from "next/router";

type Props = {
  처음으로: () => void;
};

const ThirdStep = ({ 처음으로 }: Props) => {
  const router = useRouter();
  return (
    <>
      <Text typography="h1">이제 칭찬할 시간이에요!</Text>
      <Spacing size={8} />
      <Text typography="p" color={colors.grey[800]}>
        칭찬할 상대방의 아이디를 입력하거나
        <br />
        QR 인증을 통해 등록해주세요.
      </Text>
      <CTAButton
        onClick={() => {
          처음으로();
          // router.push("/");
        }}
      >
        칭찬 시작하기
      </CTAButton>
    </>
  );
};

export default ThirdStep;
