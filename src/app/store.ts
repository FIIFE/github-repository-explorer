import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootStateType } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatchType = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootStateType, null, Action<string>>;
export default store;
