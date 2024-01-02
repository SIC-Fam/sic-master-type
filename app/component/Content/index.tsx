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

interface ContentProps {
  numberOfWordTest: number;
  onStart: () => void;
  onFinish: (wordCount: number, correctWord: number) => void;
  isFinish: boolean;
}

const Content = ({
  numberOfWordTest,
  onStart,
  onFinish,
  isFinish,
}: ContentProps) => {
  const randomText = useMemo(
    () => faker.word.words(numberOfWordTest).split(""),
    [numberOfWordTest]
  );
  const [word, setWord] = useState("");
  const [typed, setTyped] = useState(false);

  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (isFinish || !isAllowedCode(code)) return;

      if (!typed) {
        onStart();
        setTyped(true);
      }

      if (key === "Backspace") {
        if (word.length > 0) {
          setWord((prev) => prev.slice(0, word.length - 1));
        }
        return;
      }
      setWord((prev) => prev + key);
    },
    [typed, word.length, isFinish]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    if (isFinish) {
      const wordArray = word.trim().split(" ");
      const randomTextArray = randomText.join("").split(" ");
      const correctWordArray = wordArray.filter(
        (w, index) => w === randomTextArray[index]
      );

      onFinish(wordArray.length, correctWordArray.length);
    }
  }, [isFinish, onFinish, randomText, word]);

  return (
    <div className="text-gray-500 text-justify">
      {randomText.length &&
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
                className="text-xl animation-fadeIn tracking-wide bg-red-500"
                key={index}
              >
                {text}
              </span>
            );
          } else if (
            !!word[index] &&
            text !== word[index] &&
            word[index] === " "
          ) {
            return (
              <span
                className="text-xl animation-fadeIn tracking-wide bg-red-500"
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
        })}
    </div>
  );
};

export default Content;
