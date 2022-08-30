import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import appSlice from "./appSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  app: appSlice,
  modal: modalSlice,
  user: userSlice,
});

export default rootReducer;
