import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsersByName, UserType } from "../../api/users";
import { AppThunk } from "../../app/store";

interface UsersStateType {
  loading: boolean;
  list: Array<UserType>;
}

const usersInitialState: UsersStateType = {
  loading: false,
  list: [],
};

const startLoading = (state: UsersStateType) => {
  state.loading = true;
};

const finishLoading = (state: UsersStateType) => {
  state.loading = false;
};

const users = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    getUsersStart: startLoading,
    getUsersFinish: finishLoading,
    getUsersSuccess(state, { payload }: PayloadAction<Array<UserType>>) {
      state.list = payload;
    },
  },
});

export const { getUsersFinish, getUsersStart, getUsersSuccess } = users.actions;
export default users.reducer;

export const fetchUsers = (name: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const users = await getUsersByName(name);
    console.log(users);
    dispatch(getUsersSuccess(users));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(getUsersFinish());
  }
};
