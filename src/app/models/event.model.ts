import { Post } from './post.model';

export interface Event {
  id: number,
  date: string,
  time: string,
  place: string,
  responsible: string,
  post: Post
}
