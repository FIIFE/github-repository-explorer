import React from "react";
import { RepoType } from "../../../api/repositories";
import styles from "./RepoListItem.module.scss";

interface RepoListItemPropsType {
  repo: RepoType;
}

export const RepoListItem: React.FC<RepoListItemPropsType> = ({ repo }) => {
  return (
    <div className={styles.repoItem}>
      <div>{repo.title}</div>
    </div>
  );
};
