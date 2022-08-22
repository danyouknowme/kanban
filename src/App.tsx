import React from "react";
import { Navbar, Sidebar, Task } from "./components";
import { mockData } from "../mock";

const App: React.FC = () => {
  return (
    <div className="App min-h-screen bg-whitesmoke dark:bg-secondary overflow-hidden">
      <Sidebar>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex gap-x-6 p-6 overflow-x-auto w-screen md:w-[calc(100vw-304px)] h-[calc(100vh-96px)]">
            {mockData.map((data, index) => (
              <Task task={data} key={index} />
            ))}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;
