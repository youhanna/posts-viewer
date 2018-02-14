import { Action } from '@ngrx/store';
import { Post } from '../models/post';

export enum PostActionTypes {
    UpdateAll = '[Post] Update All',
    UpdatedAll = '[Post] Updated All'
}

export class UpdateAll implements Action {
    readonly type = PostActionTypes.UpdateAll;
}

export class UpdatedAll implements Action {
    readonly type = PostActionTypes.UpdatedAll;

    constructor(public payload: Post[]){}
}

export type PostActions = UpdateAll | UpdatedAll;