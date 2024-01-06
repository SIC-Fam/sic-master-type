"use client";

import Image from "next/image";
import React, { useState } from "react";
import InformationModal from "../modal/information";

const Header = () => {
  const [isOpenInformationModal, setIsOpenInformationModal] = useState(false);

  return (
    <>
      <InformationModal
        isOpen={isOpenInformationModal}
        onClose={() => setIsOpenInformationModal(false)}
      />
      <div className="py-2 flex items-center justify-between w-full mb-10">
        <Image height={180} width={200} src="/logo.png" alt="logo" />
        <Image
          height={30}
          width={30}
          src="/icon/help.svg"
          alt="help"
          className="cursor-pointer"
          onClick={() => setIsOpenInformationModal(true)}
        />
      </div>
    </>
  );
};

export default Header;
