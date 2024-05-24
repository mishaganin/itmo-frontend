export interface IAuthor {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: IAuthor;
  createdAt: Date;
}
