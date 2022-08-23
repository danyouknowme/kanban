import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../interfaces/modal";

const initialState: IModalState = {
  modalCreate: {
    isOpen: false,
  },
  modalView: {
    isOpen: false,
    tasklist: null,
  },
};

const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setModalCreate: (state, action) => {
      state.modalCreate = action.payload;
    },
    setModalView: (state, action) => {
      state.modalView = action.payload;
    },
  },
});

export const { setModalCreate, setModalView } = AppSlice.actions;
export default AppSlice.reducer;
