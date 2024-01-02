"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { faker } from "@faker-js/faker";

export const isAllowedCode = (code: string): boolean => {
  return (
    code.startsWith("Key") ||
    code === "Backspace" ||
    code === "Space" ||
    code === "Minus"
  );
};

const Content = () => {
  const randomText = useMemo(() => faker.word.words(70).split(""), []);
  const [word, setWord] = useState("");

  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!isAllowedCode(code)) return;

      if (key === "Backspace") {
        if (word.length > 0) {
          setWord((prev) => prev.slice(0, word.length - 1));
        }
        return;
      }
      setWord((prev) => prev + key);
    },
    [word.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="relative w-full max-w-[700px]">
      <div className="text-gray-500 text-justify">
        {randomText.length &&
          randomText.map((text, index) => {
            if (!!word[index] && text === word[index]) {
              return (
                <span
                  className="text-lg tracking-wide text-primary"
                  key={index}
                >
                  {text}
                </span>
              );
            } else if (!!word[index] && text !== word[index]) {
              return (
                <span className="text-lg tracking-wide bg-red-500" key={index}>
                  {text}
                </span>
              );
            } else if (
              !!word[index] &&
              text !== word[index] &&
              word[index] === " "
            ) {
              return (
                <span className="text-lg tracking-wide bg-red-500" key={index}>
                  {text}
                </span>
              );
            }

            return (
              <span key={index} className="text-lg tracking-wide text-gray-600">
                {text}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Content;
