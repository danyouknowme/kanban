import { IBoard } from "./board";

export interface IAppState {
  boards: IBoard[];
  selectedBoard: IBoard | null;
}
