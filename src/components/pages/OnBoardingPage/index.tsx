import React, { createContext, useState } from "react";
import SecondStep from "./Step/SecondStep";
import Container from "@/components/common/ui/Container";
import FirstStep from "./Step/FirstStep";
import ThirdStep from "./Step/ThirdStep";
import { useForm, FormProvider } from "react-hook-form";
import { User } from "@/models/User";
import FadeoutLeftOnExit from "@/components/common/animate/FadeoutLeftOnExit";
import { SwitchCase } from "@toss/react";
import { AnimatePresence } from "framer-motion";
import { CTAButton } from "@/components/common/ui/Button";
import { Router, useRouter } from "next/router";

type FunnelStep = "정보입력" | "파트너입력" | "완료";

export const OnBoardingContext = createContext<{
  step: FunnelStep;
  setStep: (step: FunnelStep) => void;
}>({
  step: "정보입력",
  setStep: () => {},
}).Provider;

const OnBoardingPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<FunnelStep>("정보입력");
  const methods = useForm<User>({
    mode: "all",
    defaultValues: {
      name: "",
      birthDate: null,
      partner: {},
    },
  });

  const handleStepChange = () => {
    switch (step) {
      case "정보입력":
        setStep(() => "파트너입력");
        break;
      case "파트너입력":
        setStep(() => "완료");
        break;
      case "완료":
        router.replace("/");
        break;
    }
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <OnBoardingContext value={{ step, setStep }}>
          {/* TODO: useFunnel 등으로 개선하기 */}
          <AnimatePresence>
            <FadeoutLeftOnExit visible={step === "정보입력"}>
              <FirstStep 파트너입력이동={() => setStep("파트너입력")} />
            </FadeoutLeftOnExit>
            <FadeoutLeftOnExit visible={step === "파트너입력"}>
              <SecondStep 완료={() => setStep("완료")} />
            </FadeoutLeftOnExit>
            <FadeoutLeftOnExit visible={step === "완료"}>
              <ThirdStep 처음으로={() => setStep("정보입력")} />
            </FadeoutLeftOnExit>
          </AnimatePresence>
        </OnBoardingContext>
        <CTAButton onClick={handleStepChange}>
          <SwitchCase
            value={step}
            caseBy={{
              정보입력: <span>다음으로</span>,
              파트너입력: <span>다음</span>,
              완료: <span>시작하기</span>,
            }}
          />
        </CTAButton>
      </FormProvider>
    </Container>
  );
};

export default OnBoardingPage;
