import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export const useThemeContext = () => {
	let context = useContext(ThemeContext);

	if (context === undefined) {
		throw Error("Cannot get theme context provider");
	}

	return context;
};
