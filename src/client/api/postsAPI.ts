import { postsAPI } from '@client/__fakeAPI__/postsAPI';
import { IPost } from '@shared/types';
import { ImagesAPI } from './imagesAPI';

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
