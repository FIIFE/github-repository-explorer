import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import { UserListItem } from "../UserListItem/UserListItem";
import { FetchResultTitle } from "../../../components/FetchResultTitle/FetchResultTitle";
import { LoadingTitle } from "../../../components/LoadingTitle/LoadingTitle";
import styles from "./UsersList.module.scss";

export const UsersList: React.FC = () => {
  const { lastSearchPhrase, list, loading } = useSelector(
    (state: RootStateType) => state.users
  );

  let resultTitle;
  if (lastSearchPhrase) {
    resultTitle = (
      <FetchResultTitle
        fetchQuery={lastSearchPhrase}
        responseEmpty={list.length === 0}
      />
    );
  }

  const usersList = list.map((user) => {
    return <UserListItem key={user.id} user={user} />;
  });

  if (loading) {
    return <LoadingTitle />;
  }

  return (
    <>
      {resultTitle}
      <div className={styles.usersList}>{usersList}</div>
    </>
  );
};
