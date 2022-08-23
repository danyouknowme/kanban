import React, { useEffect } from "react";
import { Navbar, Sidebar, Task } from "./components";
import { mockData } from "../mock";
import { useDispatch, useSelector } from "react-redux";
import { setBoards, setSelectedBoard } from "./app/appSlice";
import { IBoard } from "./interfaces/board";

const App: React.FC = () => {
  const boards = useSelector((state: any) => state.app.boards as IBoard[]);
  const selectedBoard = useSelector((state: any) => state.app.selectedBoard as IBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBoards(mockData));
    dispatch(setSelectedBoard(boards[0]));
  }, []);

  return (
    <div className="App min-h-screen bg-whitesmoke dark:bg-secondary overflow-hidden">
      <Sidebar>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex gap-x-6 p-6 overflow-x-auto w-screen md:w-[calc(100vw-304px)] h-[calc(100vh-96px)]">
            {selectedBoard.boardTask.map((data, index) => (
              <Task task={data} key={index} />
            ))}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;
