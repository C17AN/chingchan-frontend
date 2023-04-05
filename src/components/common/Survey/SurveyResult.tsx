import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex, Spacing } from "@toss/emotion-utils";
import colors from "material-colors";
import React, { useState } from "react";
import { VscGraph } from "react-icons/vsc";
import Button from "../Button";
import SurveyDetailModal from "./SurveyDetailModal";

export type SurveyProps = {
  title: string;
  description?: string;
  surveyItems: SurveyItem[];
};

export type SurveyItem = {
  label: string;
  value: number;
};

const EnrollSurvey = () => {};

const SurveyResult = ({ title, surveyItems }: SurveyProps) => {
  const [completed, setCompleted] = useState(false);
  const [surveyDetailModalOpen, setSurveyDetailModalOpen] = useState(false);
  const SURVEY_ITEM = [
    { label: "부산 시그니엘", value: 26 },
    { label: "그랜드 조선 부산", value: 74 },
  ];
  return (
    <>
      {surveyDetailModalOpen && (
        <SurveyDetailModal
          open={surveyDetailModalOpen}
          onClose={() => setSurveyDetailModalOpen(false)}
        />
      )}
      <Container className="survey-container">
        <Content onClick={() => setSurveyDetailModalOpen(true)}>
          <Flex
            align="center"
            css={css`
              margin-bottom: 16px;
            `}
          >
            <VscGraph />
            <h2 className="survey-title">{title}</h2>
          </Flex>
          {SURVEY_ITEM.map((surveyItem) =>
            completed ? (
              <SurveyGraph value={surveyItem.value} key={surveyItem.label} />
            ) : (
              <div className="survey-item__label" key={surveyItem.label}>
                {surveyItem.label}
              </div>
            )
          )}
          <h6 className="survey-candidate-count">2060명이 참여중</h6>
        </Content>
        <Spacing size={20} />
        <Button
          css={css`
            width: 100%;
          `}
        >
          투표하기
        </Button>
      </Container>
    </>
  );
};

const SurveyGraph = ({ value }: { value: number }) => {
  return <SurveyGraphStick width={value}></SurveyGraphStick>;
};

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  border-radius: 12px;
  border: 1px solid var(--primary-bg-color);
  padding: 12px 14px;
  background-color: ${colors.teal[50]};

  .survey-title {
    font-size: 0.925rem;
    font-weight: 700;
    color: ${colors.grey[900]};
    display: inline-block;
    margin-left: 4px;
  }

  .survey-item__label {
    font-size: 0.875rem;
    padding: 8px 0;
  }

  .survey-candidate-count {
    font-size: 0.75rem;
    text-align: right;
    margin-top: 12px;
    color: ${colors.grey[500]};
  }
`;

const SurveyGraphStick = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  background-color: ${colors.teal[500]};
  border-radius: 4px;
  height: 16px;
  margin: 8px 0;
`;

export default SurveyResult;
