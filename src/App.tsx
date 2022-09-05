import React, { useEffect, useState } from "react";
import { Navbar, Sidebar, Task } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setBoards, setSelectedBoard, setTaskColumns } from "./app/appSlice";
import { IBoard } from "./interfaces/board";
import { DragDropContext } from "react-beautiful-dnd";
import { ITask } from "./interfaces/task";
import { onDragEnd } from "./utils/draganddrop";
import { ImPlus } from "react-icons/im";
import ModalCreate from "./components/ModalCreate";
import { setModalCreate, setModalView } from "./app/modalSlice";
import ModalView from "./components/ModalView";
import { getAllBoards } from "./services/board";
import { setAuthUser } from "./app/userSlice";

const mockUser = {
  id: "6305ebbaaa963421b7459c4a",
  email: "thanathip.suw@ku.th",
  fullName: "Thanathip SUWANNAKHOT",
  googleId: "107440097903548420752",
  picture: "https://lh3.googleusercontent.com/a-/AOh14GhlV28ILIpjYLINLm0KT2LuxoNTpY5ii1w9ek1n=s96-c",
};

const App: React.FC = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
  const selectedBoard = useSelector((state: any) => state.app.selectedBoard as IBoard);
  const taskColumns = useSelector((state: any) => state.app.taskColumns as ITask);
  const modalCreateState = useSelector((state: any) => state.modal.modalCreate);
  const modalViewState = useSelector((state: any) => state.modal.modalView);
  const authUser = useSelector((state: any) => state.user.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthUser(mockUser));
    getAllBoards(authUser.id).then((boards) => {
      dispatch(setBoards(boards));
      dispatch(setSelectedBoard(boards[0]));
      dispatch(setTaskColumns(boards[0].boardTask));
    });
    dispatch(setModalCreate({ isOpen: false }));
    dispatch(setModalView({ isOpen: false, tasklist: null }));
  }, [setModalView]);

  return (
    <div className="App min-h-screen bg-whitesmoke dark:bg-secondary overflow-hidden">
      {modalCreateState.isOpen && <ModalCreate />}
      {modalViewState.isOpen && <ModalView />}
      <Sidebar isOpenSidebar={isOpenSideBar} setIsOpenSidebar={setIsOpenSideBar}>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div
            className={`flex gap-x-6 p-6 w-screen overflow-x-auto h-[calc(100vh-96px)] ${
              isOpenSideBar ? "md:w-[calc(100vw-304px)]" : "md:w-[calc(100vw-54px)]"
            }`}
          >
            <DragDropContext onDragEnd={(result) => onDragEnd(result, dispatch, taskColumns, setTaskColumns, selectedBoard.id, authUser.id)}>
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
