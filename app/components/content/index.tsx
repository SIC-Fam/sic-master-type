"use client";

import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import { v4 } from "uuid";
import TextContent, { ContentTypeType } from "./text";

interface ContentProps {
  word: string;
  randomText: string[];
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  isFocus: boolean;
}

const Content = ({ randomText, word, isFocus, setIsFocus }: ContentProps) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <div
        className={`text-primary flex items-center justify-center my-6 duration-200 ${
          isFocus ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/icon/camera.svg"
          width={24}
          height={24}
          alt="focus-camera"
          className="mr-5"
        />
        Focus to start typing.
      </div>

      <div
        className={`text-gray-500 text-justify w-full mb-10 duration-200 outline-none ${
          !isFocus ? "blur-sm cursor-pointer" : "blur-none"
        }`}
        tabIndex={0}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      >
        {hydrated && randomText.length ? (
          randomText.map((text, index) => {
            let type: ContentTypeType = "normal";
            if (!!word[index] && text === word[index]) {
              type = "primary";
            } else if (!!word[index] && text !== word[index]) {
              type = "error";
            }

            return <TextContent key={v4()} content={text} type={type} />;
          })
        ) : (
          <div className="h-[200px] animate-pulse bg-slate-800/20 rounded-md w-full"></div>
        )}
      </div>
    </>
  );
};

export default memo(Content);
