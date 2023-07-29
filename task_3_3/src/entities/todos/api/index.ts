import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const res = await fetch(
      "https://task-3-3-default-rtdb.firebaseio.com/todos.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
