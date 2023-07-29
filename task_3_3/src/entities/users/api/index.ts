import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch(
    "https://task-3-3-default-rtdb.firebaseio.com/users.json"
  );
  const users = await res.json();
  return users;
});
