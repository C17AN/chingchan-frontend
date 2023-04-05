import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import Survey from "@/components/common/Survey/SurveyResult";
import SurveySubmission from "@/components/common/Survey/SurveySubmission";
import React, { useState } from "react";
import FirstSection from "./Section/FirstSection/RecentSurvey";

type Props = {};

const MainPage = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FirstSection />
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="새로운 투표를 등록해주세요"
      >
        {/* <Survey title="부산 호캉스 추천좀" /> */}
        <SurveySubmission />
      </Modal>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        새 투표 등록하기
      </Button>
    </div>
  );
};

export default MainPage;
