import React from "react";
import { UsersSearch } from "../features/users/UsersSearch/UsersSearch";
import "./App.scss";
import { UsersList } from "../features/users/UsersList/UsersList";

export const App: React.FC = () => (
  <>
    <UsersSearch />
    <UsersList />
  </>
);
