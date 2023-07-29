import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "entities/users";
import { todosSlice } from "entities/todos";
import { postsSlice } from "./../../entities/posts/model/posts";
export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    users: usersSlice.reducer,
    todos: todosSlice.reducer,
    posts: postsSlice.reducer,
  },
});
