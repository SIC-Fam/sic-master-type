"use client";

import React from "react";
import Modal from "..";
import Link from "next/link";

interface InformationModalProp {
  isOpen: boolean;
  onClose: () => void;
}

const InformationModal = ({ isOpen, onClose }: InformationModalProp) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h4 className="text-primary text-2xl font-semibold my-2">
          About SIC - Master Type
        </h4>
        <p className="text-slate-500 font-light mb-4">
          Master Type is a minimalistic typing speed testing app built with
          React and TailwindCSS that inspired by MonkeyType. It allows users to
          test and improve their typing speed and accuracy, provides a
          user-friendly interface and intuitive feedback on typing performance.
          Master Type is developed by{" "}
          <span className="text-primary font-bold underline">
            <Link
              target="_blank"
              href="https://www.facebook.com/clbtinhocsinhvien"
              passHref={true}
            >
              SIC
            </Link>
          </span>
        </p>
        <h4 className="text-primary text-2xl font-semibold my-2">
          How to play
        </h4>
        <p className="text-slate-500 font-light mb-4">
          Once you&apos;ve selected your time mode, click on the blur field to
          enter start mode. You&apos;ll see a passage of text or code appear on
          the screen. Begin typing the text as accurately and quickly as you
          can.
          <br />
          <br />
          That&apos;s all. Hope you enjoy the game.
        </p>
      </div>
    </Modal>
  );
};

export default InformationModal;
