import React, { createContext, useState } from "react";
import SecondStep from "./Step/SecondStep";
import Container from "@/components/common/ui/Container";
import FirstStep from "./Step/FirstStep";
import ThirdStep from "./Step/ThirdStep";

type FunnelStep = "정보입력" | "파트너입력" | "완료";

export const OnBoardingContext = createContext<{
  step: FunnelStep;
  setStep: (step: FunnelStep) => void;
}>({
  step: "정보입력",
  setStep: () => {},
}).Provider;

const OnBoardingPage = () => {
  const [step, setStep] = useState<FunnelStep>("정보입력");

  return (
    <Container>
      <OnBoardingContext value={{ step, setStep }}>
        <FirstStep />
        <SecondStep />
        <ThirdStep />
      </OnBoardingContext>
    </Container>
  );
};

export default OnBoardingPage;
