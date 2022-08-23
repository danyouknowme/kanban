import { ReactNode, useState } from "react";
import { BsKanban } from "react-icons/bs";
import { IoEyeOffOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { IBoard } from "../interfaces/board";
import BoardList from "./BoardList";
import ThemeToggle from "./ThemeToggle";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
  const boards = useSelector((state: any) => state.app.boards as IBoard[]);
  const selectedBoard = useSelector((state: any) => state.app.selectedBoard as IBoard);

  const handleClickSidebar = () => {
    if (!isOpenSideBar) {
      setIsOpenSideBar(true);
    }
  };

  return (
    <div className="flex">
      <div
        className={`${
          !isOpenSideBar ? "ml-[-250px] cursor-pointer" : ""
        } w-[304px] hidden md:flex flex-col justify-between min-h-screen bg-white dark:bg-main shadow duration-500`}
        onClick={handleClickSidebar}
      >
        <div className="flex flex-col">
          <div className="relative flex items-center h-[96px] px-8">
            <BsKanban className="w-8 h-8 text-button" />
            <span className="text-neutral-700 dark:text-white text-3xl font-semibold ml-4">kanban</span>
            <BsKanban className={`absolute w-8 h-8 text-button right-3 duration-300 ${isOpenSideBar ? "opacity-0" : "opacity-100"}`} />
          </div>
          <div className="flex flex-col my-6 pr-8">
            <span className="text-zinc-500 text-sm font-semibold px-8">ALL BOARDS (8)</span>
            <div className="flex flex-col my-4">
              {boards.map((board, index) => (
                <BoardList
                  boardName={board.boardName}
                  key={index}
                  active={board.boardName === selectedBoard.boardName}
                  isOpenSideBar={isOpenSideBar}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-6 mb-12">
          <ThemeToggle isOpenSideBar={isOpenSideBar} />
          <div className="flex items-center ml-2 cursor-pointer" onClick={() => setIsOpenSideBar(false)}>
            <IoEyeOffOutline className="w-5 h-5 text-zinc-500" />
            <span className="text-sm text-zinc-500 font-medium ml-3">Hide Sidebar</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
