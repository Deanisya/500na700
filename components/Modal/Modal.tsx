"use client";

import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import s from "./Modal.module.scss";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  useModal(open, onClose);

  if (!open) return null;

  return (
    <div
      className={s.modalOverlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={s.modalContent}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={s.modalHeader}>
          <h2 className={s.modalTitle}>Связаться с нами</h2>
          <button
            type="button"
            className={s.modalCloseButton}
            onClick={onClose}
            aria-label="Закрыть"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icons/closeBtn.svg`}
              alt="btn"
              width={23}
              height={23}
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
