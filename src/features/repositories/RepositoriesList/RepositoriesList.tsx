import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import { fetchRepos, removeUserRepos } from "../repositoriesSlice";
import { LoadingTitle } from "../../../components/LoadingTitle/LoadingTitle";
import { RepoListItem } from "../RepoListItem/RepoListItem";
import styles from "./RepositoriesList.module.scss";
import { UserType } from "../../../api/users";

interface RepositoriesListPropsType {
  user: UserType;
}

export const RepositoriesList: React.FC<RepositoriesListPropsType> = ({
  user,
}) => {
  const dispatch = useDispatch();
  const { list, userIdsOfLoadingRepos } = useSelector(
    (state: RootStateType) => state.repositories
  );

  useEffect(() => {
    dispatch(fetchRepos(user));
    return () => {
      dispatch(removeUserRepos(user.id));
    };
  }, [user, dispatch]);

  if (userIdsOfLoadingRepos.includes(user.id)) {
    return <LoadingTitle />;
  }

  const userRepos = list.filter((repo) => repo.userId === user.id);

  let content;
  if (userRepos.length > 0) {
    content = (
      <div className={styles.repoList}>
        {userRepos.map((repo) => (
          <RepoListItem key={repo.id} repo={repo} />
        ))}
      </div>
    );
  } else {
    content = <div>No public repositories</div>;
  }

  return <>{content}</>;
};
