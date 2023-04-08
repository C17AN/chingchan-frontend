import { Input } from "@/components/common/ui/Input";
import Text from "@/components/common/ui/Text";
import React from "react";
import { Spacing } from "@toss/emotion-utils";
import { CTAButton } from "@/components/common/ui/Button";
import { useFormContext } from "react-hook-form";

type Props = {
  파트너입력이동: () => void;
};

const FirstStep = ({ 파트너입력이동 }: Props) => {
  const { register, watch } = useFormContext();

  return (
    <>
      <Text typography="h1">내 정보 입력하기</Text>
      <Spacing size={4} />
      <Text typography="p">서비스 이용을 위해 기본정보를 입력해주세요.</Text>
      <Spacing size={20} />
      <Text typography="small">
        모든 데이터는 암호화되어 안전하게 보관되며,
        <br />
        최소한의 정보만을 수집합니다.
      </Text>
      <Spacing size={20} />
      <Input label="이름" {...register("name")} />
      <Spacing size={20} />
      <Input
        label="생년월일"
        {...register("name")}
        placeholder="yyyy-MM-DD 형식으로 입력해주세요"
      />
    </>
  );
};

export default FirstStep;
