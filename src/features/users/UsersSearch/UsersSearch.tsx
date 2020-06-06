import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../usersSlice";

export const UsersSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState("");

  const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(fetchUsers(searchPhrase));
    event.preventDefault();
  };

  return (
    <form onSubmit={searchSubmit}>
      <input
        type="text"
        value={searchPhrase}
        onChange={(event) => {
          setSearchPhrase(event.target.value);
        }}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
