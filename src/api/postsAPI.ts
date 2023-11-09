import { ImagesAPI } from './imagesAPI.ts';
import { postsAPI } from '@/__fakeAPI__/postsAPI.ts';
import { IPost } from '@/types/types.ts';

export const PostsAPI = {
  getAll: async () => {
    const posts: IPost[] = await postsAPI.getPosts();
    const images = await ImagesAPI.getAll();
    return posts.map((post: IPost, idx: number): IPost => ({
      ...post,
      image: images[idx].urls.small,
    }));
  },
};
