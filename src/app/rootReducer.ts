import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import repositoriesReducer from "../features/repositories/repositoriesSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  repositories: repositoriesReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
