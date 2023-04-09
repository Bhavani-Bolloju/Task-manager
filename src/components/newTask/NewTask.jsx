import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { onAddTask, addTask } from "../redux/taskSlice";
import ReactDatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import { nanoid } from "nanoid";
import {IoMdClose} from 'react-icons/io'

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
    <div className="relative">
      {!addTaskStatus && (
        <button
          onClick={addNewTaskHandler}
          className="rounded-md text-xs bg-white px-4 py-2 hover:bg-slate-300"
        >
          <span className="flex items-center gap-1 ">
            <IoMdAdd className="w-4 h-4" />
            <span>New Task</span>
          </span>
        </button>
      )}

      {addTaskStatus && (
        <form
          className="flex flex-wrap gap-3 bg-[#ffffffc4] rounded-md border border-slate-200 px-8 py-14 relative"
          onSubmit={onSubmitTaskHandler}
        >
          <textarea
            className="bg-slate-50 border border-slate-200 grow basis-full resize-none rounded-md outline-none placeholder:text-sm p-2"
            name="taskName"
            placeholder="Your task...."
            rows="2"
            ref={taskRef}
            required
          />
          <label
            htmlFor="date"
            className="bg-slate-50 border border-slate-200 grow flex gap-2 items-center px-2 py-1 rounded-md "
          >
            <SlCalender className="text-sm" />
            <ReactDatePicker
              required
              id="date"
              selected={startDate}
              className="outline-none w-full h-full bg-transparent text-[14px] font-['Aleo'] placeholder:text-sm"
              onChange={(date) => setStartDate(date)}
              placeholderText="Date"
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
            className="grow bg-slate-50 border border-slate-200  text-[14px] outline-none px-2 rounded-md "
          >
            <option value="pending" className="py-2 h-2">pending</option>
            <option  value="completed" className="py-2">completed</option>
          </select>
          <div className="grow basis-full text-center mt-3">
            <button className="bg-slate-100  px-6 py-1.5 text-[16px] rounded-md hover:bg-slate-200">Add</button>
          </div>
          <IoMdClose className="absolute right-5 top-5 hover:cursor-pointer text-slate-500 hover:text-slate-200 hover:bg-slate-400 rounded-full" onClick={() => {
            console.log('clidked')
            dispatch(onAddTask())
          }}/>
        </form>
      )}
    </div>
  );
}

export default NewTask;
