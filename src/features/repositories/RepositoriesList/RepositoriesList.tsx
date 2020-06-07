import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import { fetchRepos } from "../repositoriesSlice";
import { LoadingTitle } from "../../../components/LoadingTitle/LoadingTitle";
import { RepoListItem } from "../RepoListItem/RepoListItem";

interface RepositoriesListPropsType {
  userName: string;
}

export const RepositoriesList: React.FC<RepositoriesListPropsType> = ({
  userName,
}) => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(
    (state: RootStateType) => state.repositories
  );

  useEffect(() => {
    dispatch(fetchRepos(userName));
  }, [userName, dispatch]);

  if (loading) {
    return <LoadingTitle />;
  }

  let content;
  if (list.length > 0) {
    content = list.map((repo) => <RepoListItem key={repo.id} repo={repo} />);
  } else {
    content = <div>No public repositories</div>;
  }

  return <>{content}</>;
};
