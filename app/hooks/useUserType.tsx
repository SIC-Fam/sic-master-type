import { useEffect, useMemo, useState } from "react";
import { useSetting } from "./useSetting";
import { faker } from "@faker-js/faker";

const isAllowedCode = (code: string): boolean => {
  return (
    code.startsWith("Key") ||
    code === "Backspace" ||
    code === "Space" ||
    code === "Minus"
  );
};

export const useUserType = () => {
  const [word, setWord] = useState("");
  const [typed, setTyped] = useState(false);
  const {
    setting: { isFinish, numberOfWordTest },
    onStart,
    setWordResult,
  } = useSetting();

  const randomText = useMemo(
    () => faker.word.words(numberOfWordTest).split(""),
    [numberOfWordTest]
  );

  useEffect(() => {
    if (isFinish) {
      const wordArray = word.trim().split("");

      const correctWordArray = wordArray.filter(
        (w, index) => w === randomText[index]
      );

      setWordResult(wordArray.length, correctWordArray);
    }
  }, [isFinish, randomText, word, setWordResult]);

  useEffect(() => {
    const handleKeyDown = ({ key, code }: KeyboardEvent) => {
      if (isFinish || !isAllowedCode(code)) return;

      if (!typed) {
        onStart();
        setTyped(true);
      }

      if (key === "Backspace" && randomText[word.length - 1] === " ") return;

      if (key === "Backspace") {
        if (word.length > 0) {
          setWord((prev) => prev.slice(0, word.length - 1));
        }
        return;
      }

      setWord((prev) => prev + key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFinish, typed, word.length]);

  const onResetWord = () => {
    setWord("");
  };

  return { word, setWord, typed, setTyped, randomText, onResetWord };
};
