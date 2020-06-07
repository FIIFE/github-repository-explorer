import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../../app/rootReducer";
import { UserListItem } from "../UserListItem/UserListItem";

export const UsersList: React.FC = () => {
  const [toggledUserId, setToggledUserId] = useState<number | null>(null);
  const { lastSearchPhrase, list, loading } = useSelector(
    (state: RootStateType) => state.users
  );
  let resultTitle;
  if (lastSearchPhrase && !toggledUserId) {
    if (list.length > 0) {
      resultTitle = <div>Showing users for "{lastSearchPhrase}"</div>;
    } else {
      resultTitle = <div>No results for "{lastSearchPhrase}"</div>;
    }
  }
  const usersList = list.map((user) => {
    return <UserListItem key={user.id} user={user} />;
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {resultTitle}
      {usersList}
    </>
  );
};
