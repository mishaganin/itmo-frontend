import { ImagesAPI } from './imagesAPI.ts';
import { postsAPI } from '@client/__fakeAPI__/postsAPI.ts';
import { IPost } from '@client/types/types.ts';

export const PostsAPI = {
  getAll: async () => {
    const posts: IPost[] = await postsAPI.getPosts();
    const images = await ImagesAPI.getAll();
    return posts.map(
      (post: IPost, idx: number): IPost => ({
        ...post,
        image: images[idx].urls.small,
      }),
    );
  },
};
