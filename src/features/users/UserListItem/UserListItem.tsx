import React, { useState } from "react";
import { UserType } from "../../../api/users";
import { Chevron } from "../../../components/Chevron/Chevron";
import styles from "./UserListItem.module.scss";
import { RepositoriesList } from "../../repositories/RepositoriesList/RepositoriesList";

interface UserListItemProps {
  user: UserType;
}

export const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const chevronDirection = isToggled ? "up" : "down";
  let reposList;
  if (isToggled) {
    reposList = <RepositoriesList userName={user.name} />;
  }
  return (
    <>
      <div className={styles.userItem} onClick={() => setIsToggled(!isToggled)}>
        <div>{user.name}</div>
        <Chevron direction={chevronDirection} />
      </div>
      {reposList}
    </>
  );
};
