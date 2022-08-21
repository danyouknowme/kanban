import React from "react";
import { Navbar, Sidebar } from "./components";

const App: React.FC = () => {
	return (
		<div className="App min-h-screen bg-whitesmoke dark:bg-secondary">
			<Sidebar>
				<div className="flex flex-col">
					<Navbar />
					<div className="text-white p-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum voluptas laborum accusantium voluptates, eaque facere non porro quidem
						sapiente ipsam quia reprehenderit dolor? Eum qui consequatur aspernatur velit dignissimos culpa quasi veritatis harum expedita maxime,
						voluptas facere animi repellendus, quae quaerat dicta, similique sequi vel et. Adipisci, illum vel?
					</div>
				</div>
			</Sidebar>
		</div>
	);
};

export default App;
