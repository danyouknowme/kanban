import React from "react";
import { BsKanban } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { ImPlus } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar: React.FC = () => {
	return (
		<div className="w-full bg-main px-4 py-6 flex justify-between items-center">
			<div className="flex flex-row items-center">
				<BsKanban className="w-8 h-8 text-button md:hidden" />
				<span className="text-white text-xl md:text-2xl font-medium ml-4 mr-1">Platform Launch</span>
				<IoIosArrowDown className="w-4 h-4 text-button md:hidden" />
			</div>
			<div className="flex items-center">
				<button className="flex items-center bg-button py-2 md:py-3 px-4 rounded-2xl md:rounded-3xl mr-2">
					<ImPlus className="w-4 md:w-2 text-white" />
					<span className="hidden md:block text-white ml-2">Add New Task</span>
				</button>
				<BsThreeDotsVertical className="w-6 h-6 text-zinc-400" />
			</div>
		</div>
	);
};

export default Navbar;
