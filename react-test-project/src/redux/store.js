import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo-slice";

const store = configureStore({
  reducer: {
    todosList: todoSlice,
  },
});

export default store;
