/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '@client/types/types';
import { PostsAPI } from '@client/api/postsAPI';

export interface PostsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  posts: IPost[];
  error: string | null;
}

const initialState: PostsState = {
  status: 'idle',
  posts: [],
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const data = await PostsAPI.getAll();
  return data;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<IPost>) => {
      state.posts.push(payload);
    },
    deletePost: (state, { payload }: PayloadAction<string>) => {
      state.posts.splice(
        state.posts.findIndex((post) => post.id === payload),
        1,
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.posts = payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
