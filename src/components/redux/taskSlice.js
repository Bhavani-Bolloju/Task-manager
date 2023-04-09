import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "f1",
      task: "shopping",
      date: +new Date(),
      status: "pending",
      edit: false,
    },
  ],
  edit: false,
  addTaskStatus: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    addTask: (state, action) => {
      const items = [...state.tasks];
      const findItem = items.findIndex((item) => item.id === action.payload.id);

      if (findItem < 0) {
        state.tasks.unshift(action.payload);
      } else {
        const item = { ...items[findItem] };
        const updateItem = {
          ...item,
          date: action.payload.taskDate,
          status: action.payload.taskStatus,
          task: action.payload.taskEdited,
          edit: !item.edit,
        };

        const date = action.payload.taskDate;

        state.tasks[findItem] = updateItem;
      }
      state.addTaskStatus = false;
    },
    onAddTask: (state) => {
      state.addTaskStatus = true;
    },
    deleteTask: (state, action) => {
      const items = [...state.tasks];
      const filteredItems = items.filter((item) => item.id !== action.payload);
      state.tasks = filteredItems;
    },

    editTask: (state, action) => {
      const items = [...state.tasks];
      const index = items.findIndex((item) => item.id === action.payload);

      const editableItem = { ...items[index] };
      const updateItem = { ...editableItem, edit: !editableItem.edit };
      state.tasks[index] = updateItem;
    },
  },
});

export const { addTask, onAddTask, deleteTask, editTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
