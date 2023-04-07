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
  const methods = useForm<User>({
    mode: "all",
    defaultValues: {
      name: "",
      birthDate: null,
      partner: {},
    },
  });

  return (
    <Container>
      <FormProvider {...methods}>
        <OnBoardingContext value={{ step, setStep }}>
          {/* TODO: useFunnel 등으로 개선하기 */}
          <AnimatePresence>
            <SwitchCase
              value={step}
              caseBy={{
                정보입력: (
                  <AnimatePresence>
                    <FadeoutLeftOnExit>
                      <FirstStep 파트너입력이동={() => setStep("파트너입력")} />
                    </FadeoutLeftOnExit>
                  </AnimatePresence>
                ),
                파트너입력: (
                  <FadeoutLeftOnExit>
                    <SecondStep 완료={() => setStep("완료")} />
                  </FadeoutLeftOnExit>
                ),
                완료: (
                  <FadeoutLeftOnExit>
                    <ThirdStep 처음으로={() => setStep("정보입력")} />
                  </FadeoutLeftOnExit>
                ),
              }}
            />
          </AnimatePresence>
        </OnBoardingContext>
      </FormProvider>
    </Container>
  );
};

export default OnBoardingPage;
