import React from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useThemeContext } from "../hooks/theme";

const ThemeToggle: React.FC = () => {
	const { theme, setTheme } = useThemeContext();

	return (
		<div
			className="flex justify-center items-center bg-button dark:bg-secondary w-64 py-3 rounded mb-6"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<BsFillSunFill className="w-4 h-4 text-zinc-400" />
			<div className="relative w-12 h-5 rounded-xl mx-6 bg-white dark:bg-button">
				<div
					className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full duration-500 
					left-1 bg-button dark:left-7 dark:bg-white"
				></div>
			</div>
			<BsFillMoonStarsFill className="w-4 h-4 text-zinc-400" />
		</div>
	);
};

export default ThemeToggle;
