import React from "react";
import TasksList from "./components/tasks/TasksList";
import NewTask from "./components/newTask/NewTask";

function App() {
  return (
    <div className="w-[70%] m-auto mt-10">
      <NewTask />
      <TasksList />
    </div>
  );
}

export default App;
