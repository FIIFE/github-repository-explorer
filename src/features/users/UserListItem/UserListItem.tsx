import React, { useState } from "react";
import { UserType } from "../../../api/users";
import { Chevron } from "../../../components/Chevron/Chevron";
import styles from "./UserListItem.module.scss";

interface UserListItemProps {
  user: UserType;
}

export const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const chevronDirection = isToggled ? "up" : "down";
  return (
    <div className={styles.userItem}>
      <div>{user.name}</div>
      <Chevron direction={chevronDirection} />
    </div>
  );
};
