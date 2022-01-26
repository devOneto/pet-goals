import { Action } from "./action.model";
import { Event } from "./event.model";
import { Organization } from "./organization.model";

export interface Post {
    id?: number,
    title?: string,
    urlImage?: string,
    date?: Date,
    description?: string,
    likes?: number,
    organization?: Organization,
    event?: Event,
    actions?: Action
}
