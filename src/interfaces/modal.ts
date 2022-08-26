import { ITaskList } from "./task";

export interface IModalState {
  modalCreate: IModalCreate;
  modalView: IModalView;
}

export interface IModalCreate {
  isOpen: boolean;
}

export interface IModalView {
  isOpen: boolean;
  tasklist: ITaskList | null;
  currentColumnId: string;
  index: number;
}
