import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface ChevronProps {
  direction: "up" | "down";
}

export const Chevron: React.FC<ChevronProps> = ({ direction }) => {
  let content;
  if (direction === "up") {
    content = <FiChevronUp size={20} />;
  } else if (direction === "down") {
    content = <FiChevronDown size={20} />;
  }
  return <>{content}</>;
};
