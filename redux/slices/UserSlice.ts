import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  fullName: string;
  email: string;
}

const initialState: UserState = {
  fullName: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    setUserEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setFullName, setUserEmail } = userSlice.actions;
