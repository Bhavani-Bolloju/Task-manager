import React from "react";
import {
  RiDeleteBinLine,
  RiEditLine,
  RiCalendarCheckFill,
} from "react-icons/ri";
import { addTask, deleteTask, editTask } from "../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";

function TaskItem({ id, task, status, date, edit }) {
  const dateString = new Date(date);


  const options = { year: "numeric", month: "long", day: "numeric" };
  const [startDate, setStartDate] = useState(date);
  const [taskStatus, setTaskStatus] = useState(status);
  const [editTaskInput, setEditTaskInput] = useState(task);

  const formatDate = dateString.toLocaleDateString("us-en", options);

  const dispatch = useDispatch();
  //delete task

  const deleteTaskHandler = function () {
    dispatch(deleteTask(id));
  };

  //edit task

  const editTaskHandler = function () {
    dispatch(editTask(id));
  };

  const saveEditHandler = function () {

    dispatch(
      addTask({
        id,
        taskDate:  +startDate,
        taskStatus: taskStatus,
        taskEdited: editTaskInput,
      })
    );
  };

  return (
    <div
      className="bg-slate-50 p-5 shadow-md rounded-lg relative mb-5"
    >
      <div className="flex gap-3 absolute right-11 top-10  text-sm">
        {!edit && (
          <RiEditLine
            onClick={editTaskHandler}
            className="hover:cursor-pointer"
          />
        )}

        {edit && (
          <button className="border px-3" onClick={saveEditHandler}>
            save
          </button>
        )}
        <RiDeleteBinLine
          onClick={deleteTaskHandler}
          className="hover:cursor-pointer"
        />
      </div>
      <>
        {!edit && (
          <time className="text-[12px] font-thin flex justify-start gap-1">
            <RiCalendarCheckFill className="text-sm" />
            <span>{formatDate}</span>
          </time>
        )}
        {edit && (
          <label
            htmlFor="date"
            className="border w-[180px] flex gap-2 items-center px-2"
          >
            <SlCalender className="text-sm" />
            <ReactDatePicker
              required
              id="date"
              selected={startDate}
              className="outline-none w-full bg-transparent text-[14px] font-['Aleo'] "
              onChange={(date) => setStartDate(date)}
              placeholderText="pick a date"
              isClearable
            />
          </label>
        )}
      </>
      {!edit ? (
        <p className="text-2xl font-normal">{task}</p>
      ) : (
        <input
          className="bg-transparent border mt-2 px-2 text-sm outline-none hover:border-slate-500"
          type="text"
          value={editTaskInput}
          onChange={(e) => setEditTaskInput(e.target.value)}
        />
      )}
      <>
        {!edit && (
          <p className="text-[12px] text-end mt-4 ">
            <span className="border font-light inline-block px-4 py-1 ">
              {status}
            </span>
          </p>
        )}
        {edit && (
          <div className="text-end">
            <select
              required
              value={taskStatus}
              onChange={(e) => {
                setTaskStatus(e.target.value);
              }}
              className="px-2 py-1 bg-slate-50 border text-[14px] outline-none "
            >
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
        )}
      </>
    </div>
  );
}

export default TaskItem;
