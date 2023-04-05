import Container from "@/components/common/Container";
import styled from "@emotion/styled";
import React from "react";
import { grey } from "material-colors";
import SurveyResult from "@/components/common/Survey/SurveyResult";
import { css } from "@emotion/react";

type Props = {};

const RecentSurvey = (props: Props) => {
  return (
    <Container className="title-section__container">
      <Title
        className="recent-survey__title"
        css={css`
          text-align: center;
        `}
      >
        오늘의 줄다리기
      </Title>
      <div></div>
      <Title className="recent-survey__title">지금 핫한 투표</Title>
      <SurveyResult title="성수동 맛집" surveyItems={[]} />
      <ul className="recent-survey__list"></ul>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 24px 0 20px 0;
  color: ${grey[900]};
`;

const Description = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;

export default RecentSurvey;
