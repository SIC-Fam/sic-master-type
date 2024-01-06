import React, { memo } from "react";

const ContentType = {
  primary: "text-primary",
  error: "text-red-700",
  normal: "text-gray-600",
};

export type ContentTypeType = "primary" | "error" | "normal";

interface TextContentProps {
  content: string;
  type: ContentTypeType;
}

const TextContent = ({ content, type }: TextContentProps) => {
  return (
    <span
      className={`text-xl animation-fadeIn tracking-wide ${ContentType[type]}`}
    >
      {content}
    </span>
  );
};

export default memo(TextContent);
