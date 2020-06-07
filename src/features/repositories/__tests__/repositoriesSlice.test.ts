import repos, {
  getReposFinish,
  getReposStart,
  getReposSuccess,
  removeUserRepos,
  ReposStateType,
} from "../repositoriesSlice";

describe("repositories reducer", () => {
  let initialState: ReposStateType;
  beforeEach(() => {
    initialState = {
      userIdsOfLoadingRepos: [],
      list: [],
    };
  });

  it("handles getReposStart correctly", () => {
    expect(
      repos(initialState, {
        type: getReposStart.type,
        payload: 434,
      })
    ).toEqual({
      userIdsOfLoadingRepos: [434],
      list: [],
    });
  });

  it("handles getReposFinish correctly", () => {
    const state = initialState;
    initialState.userIdsOfLoadingRepos = [434, 253, 53];
    expect(
      repos(state, {
        type: getReposFinish.type,
        payload: 434,
      })
    ).toEqual({
      userIdsOfLoadingRepos: [253, 53],
      list: [],
    });
  });

  it("handles getReposSuccess correctly", () => {
    const state = initialState;
    state.userIdsOfLoadingRepos = [43];
    expect(
      repos(state, {
        type: getReposSuccess.type,
        payload: [
          {
            id: 24,
            userId: 234,
            title: "some title",
            description: "some description",
            starCount: 2,
          },
        ],
      })
    ).toEqual({
      userIdsOfLoadingRepos: [43],
      list: [
        {
          id: 24,
          userId: 234,
          title: "some title",
          description: "some description",
          starCount: 2,
        },
      ],
    });
  });

  it("handles removeUserRepos correctly", () => {
    const state = initialState;
    initialState.list = [
      {
        id: 24,
        userId: 234,
        title: "some title",
        description: "some description",
        starCount: 2,
      },
    ];
    expect(
      repos(state, {
        type: removeUserRepos.type,
        payload: 234,
      })
    ).toEqual({
      userIdsOfLoadingRepos: [],
      list: [],
    });
  });
});
