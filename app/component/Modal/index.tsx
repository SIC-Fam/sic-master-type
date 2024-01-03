"use client";

import React, { ReactNode, useCallback, useEffect, useRef } from "react";

interface ModalProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const Modal = ({ title, children, isOpen, onClose }: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (event: any) => {
      if (
        isOpen &&
        childRef?.current &&
        !childRef.current.contains(event.target)
      ) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  if (!isOpen) {
    return undefined;
  }

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 z-[99]"
    >
      <div className="w-full">
        <div
          ref={childRef}
          className={`bg-white w-full max-w-[760px] max-h-screen mx-auto rounded-md duration-500 animate-slideIn relative z-[100]`}
        >
          <div className="flex justify-between items-center gap-2 border-b border-b-border/30 p-5">
            <h4 className="text-xl">{title}</h4>
            <div className="p-2 cursor-pointer" onClick={onClose}>
              X
            </div>
          </div>
          <div className="pt-3 p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
