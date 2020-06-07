import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsersByName, UserType } from "../../api/users";
import { AppThunk } from "../../app/store";

interface UsersStateType {
  lastSearchPhrase: string;
  loading: boolean;
  list: Array<UserType>;
}

const usersInitialState: UsersStateType = {
  lastSearchPhrase: "",
  loading: false,
  list: [],
};

const users = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    getUsersStart(state, { payload }: PayloadAction<string>) {
      state.loading = true;
      state.lastSearchPhrase = payload;
    },
    getUsersFinish(state) {
      state.loading = false;
    },
    getUsersSuccess(state, { payload }: PayloadAction<Array<UserType>>) {
      state.list = payload;
    },
  },
});

export const { getUsersFinish, getUsersStart, getUsersSuccess } = users.actions;
export default users.reducer;

export const fetchUsers = (name: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getUsersStart(name));
    const users = await getUsersByName(name);
    console.log(users);
    dispatch(getUsersSuccess(users));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(getUsersFinish());
  }
};
