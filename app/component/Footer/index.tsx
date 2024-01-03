import Image from "next/image";
import Link from "next/link";
import React from "react";
// CLUB WEBSITE, FACEBOOK
const Footer = () => {
  return (
    <div className="flex w-full text-primary justify-between items-center">
      <span>Developed by SIC - STUDENT INFORMATIC CLUB</span>

      <div className="flex items-center">
        <Link
          target="_blank"
          href="https://www.facebook.com/clbtinhocsinhvien"
          passHref={true}
        >
          <Image
            src="/fb.svg"
            alt="fb"
            width={30}
            height={30}
            className="mr-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
