import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex, Spacing } from "@toss/emotion-utils";
import React, { useState } from "react";
import Button from "../Button";
import { Input } from "@/components/common/Input";
import { TextArea } from "../TextArea";

const SurveySubmission = () => {
  return (
    <Container className="survey-container">
      <Spacing size={20} />
      <Input label="제목" bottomText="이름이 올바르지 않습니다." />
      <Spacing size={20} />
      <TextArea label="본문" />
      <Button
        css={css`
          width: 100%;
        `}
      >
        투표하기
      </Button>
    </Container>
  );
};

const Container = styled.div``;

export default SurveySubmission;
