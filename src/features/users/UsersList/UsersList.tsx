import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import { UserListItem } from "../UserListItem/UserListItem";
import { FetchResultTitle } from "../../../components/FetchResultTitle/FetchResultTitle";
import { LoadingTitle } from "../../../components/LoadingTitle/LoadingTitle";

export const UsersList: React.FC = () => {
  const [toggledUserId, setToggledUserId] = useState<number | null>(null);
  const { lastSearchPhrase, list, loading } = useSelector(
    (state: RootStateType) => state.users
  );
  let resultTitle;
  if (lastSearchPhrase && !toggledUserId) {
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
      {usersList}
    </>
  );
};
