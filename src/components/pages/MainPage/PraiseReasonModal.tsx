import Modal from "@/components/common/ui/Modal";
import React, { ComponentProps } from "react";

const PraiseReasonModal = ({ open, onClose }: ComponentProps<typeof Modal>) => {
  return (
    <Modal open={open} onClose={onClose}>
      PraiseReasonModal
    </Modal>
  );
};

export default PraiseReasonModal;
