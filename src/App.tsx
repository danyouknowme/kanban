import React, { useEffect } from "react";
import { Navbar, Sidebar, Task } from "./components";
import { mockData } from "../mock";
import { useDispatch, useSelector } from "react-redux";
import { setBoards, setSelectedBoard, setTaskColumns } from "./app/appSlice";
import { IBoard } from "./interfaces/board";
import { DragDropContext } from "react-beautiful-dnd";
import { ITask } from "./interfaces/task";
import { onDragEnd } from "./utils/draganddrop";

const App: React.FC = () => {
  const boards = useSelector((state: any) => state.app.boards as IBoard[]);
  const selectedBoard = useSelector((state: any) => state.app.selectedBoard as IBoard);
  const taskColumns = useSelector((state: any) => state.app.taskColumns as ITask);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBoards(mockData));
    dispatch(setSelectedBoard(mockData[0]));
    dispatch(setTaskColumns(mockData[0].boardTask));
  }, []);

  return (
    <div className="App min-h-screen bg-whitesmoke dark:bg-secondary overflow-hidden">
      <Sidebar>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex gap-x-6 p-6 overflow-x-auto w-screen md:w-[calc(100vw-304px)] h-[calc(100vh-96px)]">
            <DragDropContext onDragEnd={(result) => onDragEnd(result, dispatch, taskColumns, setTaskColumns)}>
              {selectedBoard &&
                Object.entries(taskColumns).map(([columnId, column]) => {
                  return <Task task={column} columnId={columnId} key={columnId} />;
                })}
            </DragDropContext>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;
