import React, { ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

ReactModal.setAppElement("#modal");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "auto",
    bottom: "auto",
    width: "100%",
    maxWidth: "600px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1e293b",
    outline: "none",
    border: "none",
    zIndex: 10000,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9999,
  },
};

const Modal = ({ children, isOpen, onClose, className }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div
        className={`relative mx-auto grid place-items-center px-2 ${className}`}
      >
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
