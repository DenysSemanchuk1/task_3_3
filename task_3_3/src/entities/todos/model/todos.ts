import { createSlice } from "@reduxjs/toolkit";
import { ToDo } from "./types";
import { fetchTodos } from "../api";
interface IState {
  isLoading: boolean;
  todos: ToDo[];
  isError: {
    show: boolean;
    message: string;
  };
}

const initialState: IState = {
  todos: [],
  isLoading: false,
  isError: {
    show: false,
    message: "",
  },
};

export const todosSlice = createSlice({
  name: "slices",
  initialState,
  reducers: {
    toggleTodosLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setTodos(state, action) {
      state.todos = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      const todos = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }));
      state.todos = todos;
      state.isLoading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = {
        show: true,
        message: action.error.message as string,
      };
      state.isLoading = false;
    });
  },
});

export const { toggleTodosLoading, setTodos } = todosSlice.actions;
