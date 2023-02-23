import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config/constants";
import axios from "axios";
const initialState = {
  todosList: [],
  loading: false,
  error: "",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const createTodo = createAsyncThunk(
  "todos/addtTodo",
  async (newTodo) => {
    try {
      const res = await axios.post(BASE_URL, newTodo);
      console.log(res);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchTodos.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return { ...state, loading: false, todosList: action.payload };
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      return { ...state, loading: false, todosList: [], error: action.payload };
    });
    //   add
    builder.addCase(createTodo.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        todosList: [...state.todosList, action.payload],
      };
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      return { ...state, loading: false, todosList: [], error: action.payload };
    });
  },
});

export default todoSlice.reducer;
