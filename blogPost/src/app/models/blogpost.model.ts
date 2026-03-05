export class BlogModel {
  id!: number;
  title!: string;
  body!: string;
  tags!: string[];
  reactions!: Reactions;
  views!: number;
  userId!: number;
}

export class Reactions {
  likes!: number;
  dislikes!: number;
}
