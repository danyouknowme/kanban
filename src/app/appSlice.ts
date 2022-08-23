import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../interfaces/app";

const initialState: IAppState = {
  boards: [],
  selectedBoard: null,
  taskColumns: null,
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
    setTaskColumns: (state, action) => {
      state.taskColumns = action.payload;
    },
  },
});

export const { setBoards, setSelectedBoard, setTaskColumns } = AppSlice.actions;
export default AppSlice.reducer;
