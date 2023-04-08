import { Input } from "@/components/common/ui/Input";
import Modal from "@/components/common/ui/Modal";
import React, { ComponentProps } from "react";
import { Spacing, Flex } from "@toss/emotion-utils";
import Button, { CTAButton } from "@/components/common/ui/Button";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import colors from "material-colors";
import { kstFormat } from "@toss/date";
import Text from "@/components/common/ui/Text";

const PraiseReasonModal = ({ open, onClose }: ComponentProps<typeof Modal>) => {
  return (
    <Modal open={open} onClose={onClose} title={"오늘의 칭찬하기"}>
      <Spacing size={8} />
      <Text color={colors.grey[500]}>
        {kstFormat(new Date(), "yyyy년 MM월 dd일 HH시 mm분")}
      </Text>
      <Spacing size={24} />
      <Input label="칭찬하는 이유" />
      <Spacing size={24} />
      <Input label="점수" />
      <Spacing size={24} />
      <Flex
        justify={"flex-end"}
        direction={"column"}
        css={css`
          gap: 8px;
        `}
      >
        <CTAButton onClick={() => {}}>칭찬합니다!</CTAButton>
        <CTAButton
          onClick={() => {}}
          css={css`
            background-color: ${colors.red[200]};
          `}
        >
          더 생각해 볼게요
        </CTAButton>
        {/* <StyledButton onClick={() => {}}>더 생각해 볼게요!</StyledButton> */}
      </Flex>
    </Modal>
  );
};

const StyledButton = styled(Button)`
  font-size: 12px;
`;

export default PraiseReasonModal;
