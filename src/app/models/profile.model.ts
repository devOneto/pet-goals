import { Badge } from "./badge.model";
import { Event } from "./event.model";

export interface Profile {
  id: number,
  name: string,
  urlImage: string,
  points: number,
  date: Date,
  description: string,
  likes: number,
  events: Event[],
  badges: Badge[]
}
