import { IPost } from '../types/types.ts';

class PostsAPI {
  getPosts(): Promise<IPost[]> {
    const posts: IPost[] = [
      {
        id: 0,
        title: 'That\'s my first title',
        content: 'Where is the colorful planet.',
        image: '',
        date: new Date(),
      },
      {
        id: 1,
        title: 'That\'s my second title',
        content: 'Peritus gloss ducunt ad fraticinida.',
        image: '',
        date: new Date(),
      },
      {
        id: 2,
        title: 'That\'s my third title',
        content: 'Use hooks to turn your components into draggable elements and droppable areas with just a few lines of code. Control every aspect of how your draggable and droppable components should behave.',
        image: '',
        date: new Date(),
      },
      {
        id: 3,
        title: 'That\'s my fourth title',
        content: 'Peritus gloss ducunt ad fraticinida.',
        image: '',
        date: new Date(),
      },
      {
        id: 4,
        title: 'That\'s my fifth title',
        content: 'Peritus gloss ducunt ad fraticinida.',
        image: '',
        date: new Date(),
      },
      {
        id: 5,
        title: 'That\'s my sixth title',
        content: 'Peritus gloss ducunt ad fraticinida.',
        image: '',
        date: new Date(),
      },
      {
        id: 6,
        title: 'That\'s my seventh title',
        content: 'Peritus gloss ducunt ad fraticinida.',
        image: '',
        date: new Date(),
      },
    ];

    return Promise.resolve(posts);
  }
}

export const postsAPI = new PostsAPI();
