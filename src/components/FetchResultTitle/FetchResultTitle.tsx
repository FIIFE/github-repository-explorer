import React from "react";
import styles from "./FetchResultTitle.module.scss";

interface FetchResultTitleProps {
  fetchQuery: string;
  responseEmpty: boolean;
}

export const FetchResultTitle: React.FC<FetchResultTitleProps> = ({
  fetchQuery,
  responseEmpty,
}) => {
  let content;
  if (responseEmpty) {
    content = `No results for "${fetchQuery}"`;
  } else {
    content = `Showing users for "${fetchQuery}"`;
  }
  return <div className={styles.title}>{content}</div>;
};
