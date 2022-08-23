import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../interfaces/app";

const initialState: IAppState = {
  boards: [],
  selectedBoard: null,
};

const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    setSelectedBoard: (state, action) => {
      state.selectedBoard = action.payload;
    },
  },
});

export const { setBoards, setSelectedBoard } = AppSlice.actions;
export default AppSlice.reducer;
