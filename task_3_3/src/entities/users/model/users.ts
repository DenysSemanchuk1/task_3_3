import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";
import { fetchUsers } from "../api";

export interface IState {
  isLoading: boolean;
  users: User[];
  isError: {
    show: boolean;
    message: string | undefined;
  };
}

const initialState: IState = {
  isLoading: false,
  users: [],
  isError: {
    show: false,
    message: "",
  },
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleUsersLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      const users = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }));
      console.log(users);
      state.users = users;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isError = {
        show: true,
        message: action.error.message,
      };
      state.isLoading = false;
    });
  },
});

export const { toggleUsersLoading } = usersSlice.actions;
