import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setModalView } from "../app/modalSlice";
import { ISubTask, ITask } from "../interfaces/task";
import { AiOutlineBorder, AiFillCheckSquare } from "react-icons/ai";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#2c2c38",
  color: "#ffffff",
};

const ModalView = () => {
  const modalViewState = useSelector((state: any) => state.modal.modalView);
  const taskColumns = useSelector((state: any) => state.app.taskColumns as ITask);
  const currentColumnId = modalViewState.currentColumnId;
  const [status, setStatus] = useState<string>(taskColumns[currentColumnId].boardTaskId);
  // const currentColumn =
  const [subtasksDone, setSubtasksDone] = useState<ISubTask[]>(modalViewState.tasklist.subtasks.filter((subtask: any) => subtask.isDone));
  const dispatch = useDispatch();

  const handleClickClose = () => dispatch(setModalView({ isOpen: false, tasklist: null, currentColumnId: "" }));

  const handleChangeStatus = (event: any) => {
    const columnId = event.target.value;
    setStatus(columnId);

    const sourceItems = [...taskColumns[currentColumnId].taskList];
    const destItems = [...taskColumns[columnId].taskList];
    sourceItems.splice(4, 1);

    console.log(currentColumnId, columnId);
    console.log(JSON.stringify(sourceItems));
    console.log(JSON.stringify([...destItems, modalViewState.tasklist]));
  };

  const handleToggleSubtaskStatus = (subtaskIndex: number, status: boolean) => {
    const taskId = modalViewState.tasklist.id;
    console.log(currentColumnId);
    console.log(taskId);
    console.log(subtaskIndex);
    console.log(status);
  };

  return (
    <Modal open={modalViewState.isOpen} onClose={handleClickClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div className="w-[350px] md:w-[510px] flex flex-col p-8 rounded-md max-h-[90vh] overflow-y-auto outline-none" style={modalStyle}>
        <span className="font-medium text-black dark:text-white">{modalViewState.tasklist.name}</span>
        <span className="text-xs text-zinc-500 font-medium my-6">{modalViewState.tasklist.description}</span>
        <div className="flex flex-col">
          <span className="text-xs font-medium">
            Subtasks {subtasksDone.length} of {modalViewState.tasklist.subtasks.length}
          </span>
          <div className="flex flex-col">
            {modalViewState.tasklist.subtasks.map((subtask: ISubTask, index: number) => {
              if (subtask.isDone) {
                return (
                  <div
                    className="flex items-center bg-secondary my-1 first:mt-4 last:mb-4 p-2.5 cursor-pointer"
                    key={index}
                    onClick={() => handleToggleSubtaskStatus(index, false)}
                  >
                    <AiFillCheckSquare className="w-4 h-4 text-button" />
                    <span className="flex-1 ml-4 text-xs line-through">{subtask.name}</span>
                  </div>
                );
              } else {
                return (
                  <div
                    className="flex items-center bg-secondary my-1 first:mt-4 last:mb-4 p-2.5 cursor-pointer"
                    key={index}
                    onClick={() => handleToggleSubtaskStatus(index, true)}
                  >
                    <AiOutlineBorder className="w-4 h-4 text-zinc-500" />
                    <span className="flex-1 ml-4 text-xs">{subtask.name}</span>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">Status</span>
            <select
              className="mt-2 py-2.5 px-4 text-white text-sm capitalize bg-transparent border border-zinc-600 rounded outline-none"
              onChange={handleChangeStatus}
              defaultValue={status}
            >
              {Object.entries(taskColumns).map(([columnId, column]) => {
                return (
                  <option key={columnId} value={columnId}>
                    {column.taskName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalView;
