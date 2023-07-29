import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await fetch(
      "https://task-3-3-default-rtdb.firebaseio.com/posts.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});
