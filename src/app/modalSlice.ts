import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../interfaces/modal";

const initialState: IModalState = {
  modalCreate: {
    isOpen: false,
  },
};

const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setModalCreate: (state, action) => {
      state.modalCreate = action.payload;
    },
  },
});

export const { setModalCreate } = AppSlice.actions;
export default AppSlice.reducer;
