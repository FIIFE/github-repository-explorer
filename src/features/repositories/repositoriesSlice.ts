import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getReposByUserName, RepoType } from "../../api/repositories";
import { AppThunk } from "../../app/store";
import { UserType } from "../../api/users";

export interface ReposStateType {
  userIdsOfLoadingRepos: Array<number>;
  list: Array<RepoType>;
}

const reposInitialState: ReposStateType = {
  userIdsOfLoadingRepos: [],
  list: [],
};

const repos = createSlice({
  name: "repositories",
  initialState: reposInitialState,
  reducers: {
    getReposStart(state, { payload: userId }) {
      state.userIdsOfLoadingRepos.push(userId);
    },
    getReposFinish(state, { payload: userId }) {
      state.userIdsOfLoadingRepos = state.userIdsOfLoadingRepos.filter(
        (id) => id !== userId
      );
    },
    getReposSuccess(state, { payload: repos }: PayloadAction<Array<RepoType>>) {
      state.list = [...state.list, ...repos];
    },
    removeUserRepos(state, { payload: userId }: PayloadAction<number>) {
      state.list = state.list.filter((repo) => repo.userId !== userId);
    },
  },
});

export const {
  getReposStart,
  getReposFinish,
  getReposSuccess,
  removeUserRepos,
} = repos.actions;
export default repos.reducer;

export const fetchRepos = (user: UserType): AppThunk => async (dispatch) => {
  try {
    dispatch(getReposStart(user.id));
    const repos = await getReposByUserName(user.name);
    dispatch(getReposSuccess(repos));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(getReposFinish(user.id));
  }
};
