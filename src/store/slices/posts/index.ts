import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '@/types/types.ts';

export interface PostsState {
  posts: IPost[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<IPost>) => {
      state.posts.push(payload);
    },
    deletePost: (state, { payload }: PayloadAction<number>) => {
      state.posts.splice(
        state.posts.findIndex((post) => post.id === payload),
        1,
      );
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
