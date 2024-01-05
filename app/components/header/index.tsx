import Image from "next/image";
import React from "react";
{
  /* <div>HEADER, HELP, LEADER BOARD</div> */
}

const Header = () => {
  return (
    <div className="py-2 flex items-center justify-between w-full mb-10">
      <Image height={180} width={200} src="/logo.png" alt="logo" />
      <Image height={30} width={30} src="/icon/help.svg" alt="help" />
    </div>
  );
};

export default Header;
