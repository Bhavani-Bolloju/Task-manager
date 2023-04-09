import React, { useState } from "react";

import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import FilterTask from "./FilterTask";

function TasksList() {
  const { tasks } = useSelector((status) => status.task);

  // console.log(tasks)

  const [selectedValue, setSelectedValue] = useState("");
  const [statusValue, setStatusValue] = useState('all')
  const [sortTasks, setSortTasks] = useState("Asc")

  const filterTaskHandler = function (value) {
    setSelectedValue(value);
  };

  const filterByStatusHandler = function (value) {
    setStatusValue(value)
  }

  const sortByDateHandler = function (value) {
    setSortTasks(value)
  }

 
  let filterTasks = tasks;

  //if pending status
  if (selectedValue == 'status' && statusValue == 'pending') {
    filterTasks = filterTasks.filter(task => task.status == "pending");
  }

  //if completed status
  if (selectedValue == 'status' && statusValue == 'completed') {
    filterTasks = filterTasks.filter(task => task.status == 'completed');
  }

  //if status = asc

  if (selectedValue === 'date' && sortTasks === 'Asc') {
    const ascitems = [...tasks].sort((a,b)=> a.date > b.date ? 1 : 0);
   filterTasks =ascitems
  }

  //if status = des

  if (selectedValue === 'date' && sortTasks === 'Des') {
    const desitems = [...tasks].sort((a,b)=> a.date > b.date ? -1 : 0);
    filterTasks = desitems
  }


  return (
    <div className="flex items-end flex-col gap-5">
      <FilterTask onFilter={filterTaskHandler} value={selectedValue} onStatus={filterByStatusHandler} onSort={ sortByDateHandler} />
      {filterTasks.map((item) => (
        <TaskItem
          key={item.id}
          id={item.id}
          task={item.task}
          status={item.status}
          date={item.date}
          edit={item.edit}
        />
      ))}
    </div>
  );
}

export default TasksList;
