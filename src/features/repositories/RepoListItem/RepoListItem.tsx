import React from "react";
import { RepoType } from "../../../api/repositories";
import styles from "./RepoListItem.module.scss";
import { AiFillStar } from "react-icons/ai";

interface RepoListItemPropsType {
  repo: RepoType;
}

export const RepoListItem: React.FC<RepoListItemPropsType> = ({ repo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{repo.title}</div>
        <div className={styles.starsContainer}>
          <div className={styles.starNumber}>
            {repo.starCount}
          </div>
          <AiFillStar />
        </div>
      </div>
      <div className={styles.description}>{repo.description}</div>
    </div>
  );
};
