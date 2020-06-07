import React from "react";
import { UserType } from "../../../api/users";

interface UserListItemProps {
  user: UserType;
}

export const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return <div>{user.name}</div>;
};
