import React from "react";
import Modal from "@/components/common/Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SurveyDetailModal = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      SurveyDetailModal
    </Modal>
  );
};

export default SurveyDetailModal;
