import { createSlice } from "@reduxjs/toolkit";
import { Post } from "./types";
import { fetchPosts } from "../api";
interface IState {
  isLoading: boolean;
  posts: Post[];
  isError: {
    show: boolean;
    message: string | undefined;
  };
}

const initialState: IState = {
  isLoading: false,
  posts: [],
  isError: {
    show: false,
    message: "",
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      const posts = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }));

      state.posts = posts;
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isError = {
        show: true,
        message: action.error.message as string,
      };
      state.isLoading = false;
    });
  },
});