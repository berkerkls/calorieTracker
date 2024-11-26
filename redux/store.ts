import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootSlice = combineReducers({
  userReducer,
});

export const Store = configureStore({
  reducer: {
    store: rootSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
