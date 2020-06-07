import users, {
  getUsersStart,
  getUsersFinish,
  getUsersSuccess,
  UsersStateType,
} from "../usersSlice";

describe("users reducer", () => {
  let initialState: UsersStateType;
  beforeEach(() => {
    initialState = {
      lastSearchPhrase: "",
      loading: false,
      list: [],
    };
  });

  it("handles getUsersStart correctly", () => {
    expect(
      users(initialState, {
        type: getUsersStart.type,
        payload: "Fifi",
      })
    ).toEqual({
      lastSearchPhrase: "Fifi",
      loading: true,
      list: [],
    });
  });

  it("handles getUsersFinish correctly", () => {
    const state = initialState;
    state.loading = true;
    state.lastSearchPhrase = "Fifi";
    expect(
      users(state, {
        type: getUsersFinish.type,
      })
    ).toEqual({
      lastSearchPhrase: "Fifi",
      loading: false,
      list: [],
    });
  });

  it("handles getUsersSuccess correctly", () => {
    const state = initialState;
    state.loading = true;
    state.lastSearchPhrase = "Fifi";
    expect(
      users(state, {
        type: getUsersSuccess.type,
        payload: [{ id: 5, name: "Fififi" }],
      })
    ).toEqual({
      lastSearchPhrase: "Fifi",
      loading: true,
      list: [{ id: 5, name: "Fififi" }],
    });
  });
});
