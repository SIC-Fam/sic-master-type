"use client";

import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}
const Modal = ({ children, isOpen, onClose, className }: ModalProps) => {
  if (!isOpen) {
    return undefined;
  }

  return (
    <div
      className="absolute inset-0 w-screen h-screen z-[100] bg-slate-900 duration-500 animate-fadeIn grid place-items-center"
      onClick={onClose}
    >
      <div className={`z-[101] pt-3 p-5 ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
