import Image from "next/image";
import React from "react";
{
  /* <div>HEADER, HELP, LEADER BOARD</div> */
}

const Header = () => {
  return (
    <div className="py-2 text-left">
      <Image height={180} width={200} src="/logo.png" alt="logo" />
    </div>
  );
};

export default Header;
