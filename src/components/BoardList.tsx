import React from "react";
import { IoIosListBox } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSelectedBoard, setTaskColumns } from "../app/appSlice";
import { IBoard } from "../interfaces/board";

interface BoardListProps {
  board: IBoard;
  active?: boolean;
  isOpenSideBar: boolean;
}

const BoardList: React.FC<BoardListProps> = ({ board, active = false, isOpenSideBar }) => {
  const dispatch = useDispatch();

  const handleClickBoard = () => {
    dispatch(setSelectedBoard(board));
    dispatch(setTaskColumns(board.boardTask));
  };

  if (active) {
    return (
      <div
        className={`flex items-center bg-button px-8 py-2.5 my-1 rounded-r-3xl cursor-pointer duration-300 ${
          isOpenSideBar ? "bg-button" : "bg-white dark:bg-main"
        }`}
      >
        <IoIosListBox className="w-5 h-5 text-white" />
        <span className="text-white text-sm font-medium ml-4">{board.boardName}</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center px-8 py-2.5 my-1 cursor-pointer" onClick={handleClickBoard}>
        <IoIosListBox className="w-5 h-5 text-zinc-500" />
        <span className="text-zinc-500 text-sm font-medium ml-4">{board.boardName}</span>
      </div>
    );
  }
};

export default BoardList;
