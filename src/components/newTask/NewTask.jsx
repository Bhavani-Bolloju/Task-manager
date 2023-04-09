import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { onAddTask, addTask } from "../redux/taskSlice";
import ReactDatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import { nanoid } from "nanoid";

import "react-datepicker/dist/react-datepicker.css";

function NewTask() {
  const { addTaskStatus } = useSelector((state) => state.task);
  const [status, setStatus] = useState("pending");
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const taskRef = useRef();

  const addNewTaskHandler = function () {
    dispatch(onAddTask());
  };

  const onSubmitTaskHandler = function (e) {
    e.preventDefault();
    const id = nanoid(4);
    const task = taskRef.current.value;

    if (status === "" || task.trim().length === 0 || date.length === 0) {
      return;
    }

    dispatch(
      addTask({
        date: +startDate,
        id,
        status,
        task,
        edit: false,
      })
    );

    //clear all the fields
    setStatus("pending");
    taskRef.current.value = "";
    setStartDate();
  };

  

  return (
    <div className="w-[500px] m-auto">
      {!addTaskStatus && (
        <button
          onClick={addNewTaskHandler}
          className="mb-8 rounded-lg text-sm "
        >
          <span className="bg-[#dcf4e4] text-[12px] flex gap-1  px-4 py-1">
            <IoMdAdd className="text-base" />
            <span>New Task</span>
          </span>
        </button>
      )}

      {addTaskStatus && (
        <form
          className="flex flex-wrap gap-3 border px-5 py-8 rounded-lg mb-10"
          onSubmit={onSubmitTaskHandler}
        >
          <textarea
            className="border grow basis-full resize-none outline-none placeholder:text-sm p-2"
            name="taskName"
            placeholder="enter your task...."
            rows="2"
            ref={taskRef}
            required
          />
          <label
            htmlFor="date"
            className="border grow flex gap-2 items-center px-2 py-1"
          >
            <SlCalender className="text-sm" />
            <ReactDatePicker
              required
              id="date"
              selected={startDate}
              className="outline-none text-[14px] font-['Aleo'] text-[#808181]"
              onChange={(date) => setStartDate(date)}
              placeholderText="pick a date"
              isClearable
            />
          </label>
          <select
            required
            value={status}
            name=""
            id=""
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            className="grow  border text-[14px] outline-none"
          >
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
          <div className="grow basis-full text-center mt-3">
            <button className="border px-6 py-1.5 text-[16px]">Add</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default NewTask;
