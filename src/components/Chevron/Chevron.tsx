import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface ChevronProps {
  direction: "up" | "down";
}

export const Chevron: React.FC<ChevronProps> = ({ direction }) => {
  let content;
  if (direction === "up") {
    content = <FiChevronUp data-testid="chevron up" size={20} />;
  } else if (direction === "down") {
    content = <FiChevronDown data-testid="chevron down" size={20} />;
  }
  return <>{content}</>;
};
