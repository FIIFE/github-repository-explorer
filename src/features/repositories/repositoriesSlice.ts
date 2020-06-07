import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getReposByUserName, RepoType } from "../../api/repositories";
import { AppThunk } from "../../app/store";

interface ReposStateType {
  loading: boolean;
  list: Array<RepoType>;
}

const reposInitialState: ReposStateType = {
  loading: false,
  list: [],
};

const repos = createSlice({
  name: "repositories",
  initialState: reposInitialState,
  reducers: {
    getReposStart(state) {
      state.loading = true;
    },
    getReposFinish(state) {
      state.loading = false;
    },
    getReposSuccess(state, { payload }: PayloadAction<Array<RepoType>>) {
      state.list = payload;
    },
  },
});

export const { getReposStart, getReposFinish, getReposSuccess } = repos.actions;
export default repos.reducer;

export const fetchRepos = (userName: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getReposStart());
    const repos = await getReposByUserName(userName);
    console.log(repos);
    dispatch(getReposSuccess(repos));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(getReposFinish());
  }
};
