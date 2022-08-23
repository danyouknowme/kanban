import React, { useEffect, useState } from "react";
import { Navbar, Sidebar, Task } from "./components";
import { mockData } from "../mock";
import { useDispatch, useSelector } from "react-redux";
import { setBoards, setSelectedBoard, setTaskColumns } from "./app/appSlice";
import { IBoard } from "./interfaces/board";
import { DragDropContext } from "react-beautiful-dnd";
import { ITask } from "./interfaces/task";
import { onDragEnd } from "./utils/draganddrop";
import { ImPlus } from "react-icons/im";
import ModalCreate from "./components/ModalCreate";
import { setModalCreate } from "./app/modalSlice";

const App: React.FC = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
  const selectedBoard = useSelector((state: any) => state.app.selectedBoard as IBoard);
  const taskColumns = useSelector((state: any) => state.app.taskColumns as ITask);
  const modalCreateState = useSelector((state: any) => state.modal.modalCreate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBoards(mockData));
    dispatch(setSelectedBoard(mockData[0]));
    dispatch(setTaskColumns(mockData[0].boardTask));
    dispatch(setModalCreate({ isOpen: false }));
  }, []);

  return (
    <div className="App min-h-screen bg-whitesmoke dark:bg-secondary overflow-hidden">
      {modalCreateState.isOpen && <ModalCreate />}
      <Sidebar isOpenSidebar={isOpenSideBar} setIsOpenSidebar={setIsOpenSideBar}>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div
            className={`flex gap-x-6 p-6 w-screen overflow-x-auto h-[calc(100vh-96px)] ${
              isOpenSideBar ? "md:w-[calc(100vw-304px)]" : "md:w-[calc(100vw-54px)]"
            }`}
          >
            <DragDropContext onDragEnd={(result) => onDragEnd(result, dispatch, taskColumns, setTaskColumns)}>
              {selectedBoard &&
                Object.entries(taskColumns).map(([columnId, column]) => {
                  return <Task task={column} columnId={columnId} key={columnId} />;
                })}
            </DragDropContext>
            <div className="flex bg-white dark:bg-main rounded-md mt-10 cursor-pointer hover:bg-white/[.55] hover:dark:bg-main/[.4]">
              <div className="flex items-center justify-center w-72 min-h-full">
                <ImPlus className="w-3 text-black dark:text-zinc-400 " />
                <span className="text-black dark:text-zinc-400 text-xl font-medium ml-3">New Column</span>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;
