import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../usersSlice";
import styles from "./UsersSearch.module.scss";

export const UsersSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState("");

  const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(fetchUsers(searchPhrase));
    setSearchPhrase("");
    event.preventDefault();
  };

  return (
    <form onSubmit={searchSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter username"
        value={searchPhrase}
        onChange={(event) => {
          setSearchPhrase(event.target.value);
        }}
      />
      <input
        type="submit"
        value="Submit"
        className={styles.button}
        disabled={!searchPhrase}
      />
    </form>
  );
};
