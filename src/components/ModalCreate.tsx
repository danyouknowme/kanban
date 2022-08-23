import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { setModalCreate } from "../app/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { ImPlus } from "react-icons/im";
import { ITask } from "../interfaces/task";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#2c2c38",
  color: "#ffffff",
};

const ModalCreate: React.FC = () => {
  const taskColumns = useSelector((state: any) => state.app.taskColumns as ITask);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>(Object.values(taskColumns)[0].taskName);
  const [subtask, setSubtask] = useState<string>("");
  const [subtasks, setSubtasks] = useState<string[]>([]);
  const modalCreateState = useSelector((state: any) => state.modal.modalCreate);
  const dispatch = useDispatch();

  const handleClickClose = () => dispatch(setModalCreate({ isOpen: false }));
  const handleClickAddSubtask = () => {
    if (subtask === "") return;
    setSubtasks((prevState) => [...prevState, subtask]);
    setSubtask("");
  };
  const handleClickRemoveSubtask = (index: number) => {
    setSubtasks(subtasks.filter((_, i) => i !== index));
  };

  const handleClickCreateTask = () => {
    console.log(title);
    console.log(description);
    console.log(status);
    console.log(subtasks);
  };

  return (
    <Modal open={modalCreateState.isOpen} onClose={handleClickClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div className="w-[350px] md:w-[510px] p-8 rounded-md max-h-[90vh] overflow-y-auto" style={modalStyle}>
        <span className="text-lg font-medium">Add New Task</span>
        <div className="flex flex-col my-6">
          <span className="text-sm">Title</span>
          <input
            type="text"
            placeholder="eg. Take coffee break"
            className="mt-2 px-4 py-2.5 text-sm text-gray-200 border border-zinc-600 placeholder-zinc-600 outline-none bg-transparent rounded"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="flex flex-col my-6">
          <span className="text-sm">Description</span>
          <textarea
            rows={5}
            placeholder="eg. It's always good to take a break. This 15 minutes break will rechrage the batteries a little."
            className="mt-2 px-4 py-2.5 text-sm border border-zinc-600 placeholder-zinc-600 outline-none bg-transparent rounded"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex flex-col my-6">
          <span className="text-sm">Subtasks</span>
          {subtasks.map((subtask, index) => (
            <div className="flex items-center" key={index}>
              <div className="mt-2 px-4 py-2 flex-1 border border-zinc-600 rounded">
                <span className="text-gray-200 text-sm select-none">{subtask}</span>
              </div>
              <IoClose className="w-6 h-6 ml-2 text-gray-500 hover:text-gray-200 cursor-pointer" onClick={() => handleClickRemoveSubtask(index)} />
            </div>
          ))}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="eg. Make coffee"
              className="mt-2 px-4 py-2.5 flex-1 text-sm text-gray-200 border border-zinc-600 placeholder-zinc-600 outline-none bg-transparent rounded"
              value={subtask}
              onChange={(event) => setSubtask(event.target.value)}
            />
          </div>
          <button className="flex items-center justify-center bg-white py-3 rounded-3xl mt-4">
            <ImPlus className="w-2 h-2 mr-2 text-button hover:text-gray-200" />
            <span className="text-sm text-button font-medium" onClick={handleClickAddSubtask}>
              Add New Subtask
            </span>
          </button>
        </div>
        <div className="flex flex-col my-6">
          <span className="text-sm">Status</span>
          <select
            className="mt-2 py-2.5 px-4 text-white text-sm capitalize bg-transparent border border-zinc-600 rounded outline-none"
            onChange={(event) => setStatus(event.target.value)}
          >
            {Object.entries(taskColumns).map(([columnId, column]) => {
              return <option key={columnId}>{column.taskName}</option>;
            })}
          </select>
        </div>
        <button className="w-full bg-button py-3 rounded-3xl text-sm font-medium" onClick={handleClickCreateTask}>
          Create Task
        </button>
      </div>
    </Modal>
  );
};

export default ModalCreate;
