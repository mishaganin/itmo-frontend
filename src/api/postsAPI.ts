import { postsAPI } from '../__fakeAPI__/postsAPI.ts';

export const PostsAPI = {
  getAll: async () => {
    const data = await postsAPI.getPosts();

    return data;
  },
};
