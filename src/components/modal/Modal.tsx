import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { S } from "./Modal_Styles";
import { Button } from "../Button";
import { useLanguage } from "../../i18n/LanguageContext";

type ModalPropsType = {
  isOpen: boolean;
  label?: string;
  title: string;
  text: string;
  onClose: () => void;
};

const Modal: React.FC<ModalPropsType> = (props: ModalPropsType) => {
  const { t } = useLanguage();
  const { isOpen, onClose } = props;
  const okButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    okButton.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.Dialog
        role={"dialog"}
        aria-modal={"true"}
        aria-labelledby={"modal-title"}
        onClick={(e) => e.stopPropagation()}
      >
        <S.CloseButton type={"button"} aria-label={t.modal.close} onClick={onClose}>
          <span></span>
        </S.CloseButton>
        {props.label && <S.Label>{props.label}</S.Label>}
        <S.Title id={"modal-title"}>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Button ref={okButton} type={"button"} onClick={onClose}>
          {t.modal.ok}
        </Button>
      </S.Dialog>
    </S.Overlay>,
    document.body
  );
};

export default Modal;
