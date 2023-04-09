import React from "react";
import TasksList from "./components/tasks/TasksList";
import NewTask from "./components/newTask/NewTask";

function App() {
  return (
    <div className=" flex flex-col gap-5">
      <h1 className="text-center text-2xl mb-8 font-semibold text-slate-500">Task Manager</h1>
      <NewTask />
      <TasksList />
    </div>
  );
}

export default App;
