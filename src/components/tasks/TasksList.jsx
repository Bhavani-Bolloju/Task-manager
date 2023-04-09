import React, { useState } from "react";

import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import FilterTask from "./FilterTask";
import Search from "./Search";

function TasksList() {
  const { tasks } = useSelector((status) => status.task);

  const [selectedValue, setSelectedValue] = useState("");
  const [statusValue, setStatusValue] = useState("all")
  const [sortTasks, setSortTasks] = useState("Asc");
  const [searchText, setSearchText] = useState('')

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
    filterTasks = [...tasks].filter(task => task.status == "pending");
  }

  if (selectedValue == 'status' && statusValue == "all") {
    filterTasks = [...tasks]
  }

  //if completed status
  if (selectedValue == 'status' && statusValue == 'completed') {
    filterTasks = [...tasks].filter(task => task.status == 'completed');
  }

  //if status = asc
  if (selectedValue === 'date' && sortTasks === 'Asc') {
    const ascOrder = [...tasks].sort((a, b) =>parseInt( a.date) - parseInt( b.date) );

    filterTasks = ascOrder;
  }

  //if status = des
  if (selectedValue === 'date' && sortTasks === 'Des') {
    const desOrder = [...filterTasks].sort((a, b) => parseInt( b.date) - parseInt( a.date))
    filterTasks = desOrder;
  }

  const searchTaskHandler = function (value) {
    setSearchText(value);
  }

  const filterSearchTasks = tasks.filter(item => {
    const task = item.task.toLowerCase();
    return task.includes(searchText.toLowerCase());
  });
  
  if (searchText.trim() !== '') {
    
    filterTasks = filterSearchTasks;
  }


  return (
    <div className="mt-4 flex flex-col">
      <div className="flex items-cente mb-8 justify-between">
        <Search onSearch={ searchTaskHandler} />
      <FilterTask onFilter={filterTaskHandler} value={selectedValue} onStatus={filterByStatusHandler} onSort={ sortByDateHandler} />
      </div>
      { filterTasks.length > 0 ? 
        
        filterTasks.map((item) => (
        <TaskItem
          key={item.id}
          id={item.id}
          task={item.task}
          status={item.status}
          date={item.date}
          edit={item.edit}
        />
        )) : <p className="text-center text-sm">No task found...</p>
      }
    </div>
  );
}

export default TasksList;
