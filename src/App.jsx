import React from "react";
import TasksList from "./components/tasks/TasksList";
import NewTask from "./components/newTask/NewTask";
import Search from "./components/tasks/Search";

function App() {
  return (
    <div className=" flex flex-col gap-5 bg-slate-100 p-20 px-32 rounded-md">
      <h1 className="text-center text-2xl mb-8 font-semibold text-slate-500">Task Manager</h1>

      <NewTask />
      <TasksList />
    </div>
  );
}

export default App;
