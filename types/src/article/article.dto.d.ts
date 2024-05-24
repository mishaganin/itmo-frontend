export declare class ArticleDto {
  id: string;
  title: string;
  description: string;
  tags: string[];
  reactions: Record<string, number>;
  authorId: string;
  commentIds: string[];
}
