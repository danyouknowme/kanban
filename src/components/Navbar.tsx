import React from "react";
import { BsKanban } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { ImPlus } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import { setModalCreate } from "../app/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { ITask } from "../interfaces/task";

const Navbar: React.FC = () => {
  const taskColumns = useSelector((state: any) => state.app.taskColumns as ITask);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    if (Object.keys(taskColumns).length === 0) return;
    dispatch(setModalCreate({ isOpen: true }));
  };

  return (
    <div className="w-full bg-white dark:bg-main px-4 py-6 flex justify-between items-center shadow border-l border-zinc-200 dark:border-zinc-700">
      <div className="flex flex-row items-center">
        <BsKanban className="w-8 h-8 text-button md:hidden" />
        <span className="text-neutral-700 dark:text-white text-xl md:text-2xl font-medium ml-4 mr-1">Platform Launch</span>
        <IoIosArrowDown className="w-4 h-4 text-button md:hidden" />
      </div>
      <div className="flex items-center">
        <button className="flex items-center bg-button py-2 md:py-3 px-4 rounded-2xl md:rounded-3xl mr-2" onClick={handleClickOpen}>
          <ImPlus className="w-4 md:w-2 text-white" />
          <span className="hidden md:block text-white ml-2 font-medium">Add New Task</span>
        </button>
        <BsThreeDotsVertical className="w-6 h-6 text-zinc-400" />
      </div>
    </div>
  );
};

export default Navbar;
