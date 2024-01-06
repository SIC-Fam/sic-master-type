"use client";

import { omit } from "lodash";
import React, { HTMLAttributes, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}
const Modal = ({
  children,
  isOpen,
  onClose,
  className,
  containerProps,
}: ModalProps) => {
  if (!isOpen) {
    return undefined;
  }

  return (
    <div
      className={`absolute inset-0 w-screen h-screen z-[100] bg-slate-900 duration-500 animate-fadeIn grid place-items-center ${containerProps?.className}`}
      {...omit(containerProps, ["className"])}
    >
      <div className={`z-[101] pt-3 p-5 ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
