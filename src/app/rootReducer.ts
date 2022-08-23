import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import appSlice from "./appSlice";

const rootReducer = combineReducers({
  app: appSlice,
  modal: modalSlice,
});

export default rootReducer;
