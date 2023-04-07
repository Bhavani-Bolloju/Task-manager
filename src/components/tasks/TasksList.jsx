import React from "react";
import {
  RiDeleteBinLine,
  RiEditLine,
  RiCalendarCheckFill,
} from "react-icons/ri";

function TasksList() {
  return (
    <div
      className="bg-[#f6fcf8] text-[#11381e] pt-8 px-10 
      pb-3  w-[500px] m-auto rounded-lg relative shadow-sm"
    >
      <div className="flex gap-3 absolute right-11 top-10 text-[#c1c1c1] text-sm">
        <RiEditLine className="hover:cursor-pointer" />
        <RiDeleteBinLine className="hover:cursor-pointer" />
      </div>
      <time className="text-[12px] font-thin text-[#154525] flex justify-start gap-1">
        <RiCalendarCheckFill className="text-[#c1c1c1] text-sm" />
        <span>April 07, 2023</span>
      </time>
      <p className="text-3xl font-light">Shopping</p>
      <p className="text-[12px] text-end mt-4 ">
        <span className="border font-light inline-block px-4 py-1 ">
          Pending
        </span>
      </p>
    </div>
  );
}

export default TasksList;
