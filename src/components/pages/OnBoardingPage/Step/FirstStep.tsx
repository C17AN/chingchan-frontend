import { Input } from "@/components/common/ui/Input";
import Text from "@/components/common/ui/Text";
import React from "react";
import { Spacing } from "@toss/emotion-utils";
import { CTAButton } from "@/components/common/ui/Button";

type Props = {};

const FirstStep = (props: Props) => {
  return (
    <>
      <Text typography="h1">내 정보 입력하기</Text>
      <Text typography="p">서비스 이용을 위해 기본정보를 입력해주세요.</Text>
      <Spacing size={8} />
      <Text typography="small">
        모든 데이터는 암호화되어 안전하게 보관되며,
        <br />
        최소한의 정보만을 수집합니다.
      </Text>
      <Input label="이름" />
      <CTAButton onClick={() => {}}>다음으로</CTAButton>
    </>
  );
};

export default FirstStep;
