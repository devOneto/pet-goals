import { Badge } from "./badge.model";
import { Event } from "./event.model";
import { Post } from "./post.model";

export interface Profile {
  id: number,
  name: string,
  email: string,
  password: string
  urlImage: string,
  points: number,
  date: Date,
  description: string,
  likes: number,
  events: Event[],
  badges: Badge[],
  posts: Post[]
  isFirstLogin: boolean
}
