import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "./task.interfac";
import { RootState } from "@/redux/store";

const initialState: ITask = {
  tasks: [
    {
      id: "12345",
      title: "Task1",
      description: "Description",
      dueDate: new Date(2025 - 10 - 10),
      isCompleted: false,
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {},
});

export const getTask = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
