import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";

const initialState: IUserState = {
  authUser: null,
};

const AppSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export const { setAuthUser } = AppSlice.actions;
export default AppSlice.reducer;
