"use client";

import React, { memo, useEffect, useState } from "react";

interface ContentProps {
  word: string;
  randomText: string[];
}

const Content = ({ randomText, word }: ContentProps) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="text-gray-500 text-justify w-full">
      {hydrated && randomText.length ? (
        randomText.map((text, index) => {
          if (!!word[index] && text === word[index]) {
            return (
              <span
                className="text-xl animation-fadeIn tracking-wide text-primary"
                key={index}
              >
                {text}
              </span>
            );
          } else if (!!word[index] && text !== word[index]) {
            return (
              <span
                className="text-xl animation-fadeIn tracking-wide text-red-700"
                key={index}
              >
                {text}
              </span>
            );
          }

          return (
            <span
              key={index}
              className="text-xl animation-fadeIn tracking-wide text-gray-600"
            >
              {text}
            </span>
          );
        })
      ) : (
        <div className="h-[200px] animate-pulse bg-slate-700 rounded-md w-full"></div>
      )}
    </div>
  );
};

export default memo(Content);
