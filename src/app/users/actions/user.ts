import { Action } from '@ngrx/store';
import { User } from '../models/user';

export enum UserActionTypes {
    Select = '[User] Select',
    Selected = '[User] Selected'
}

export class Select implements Action {
    readonly type = UserActionTypes.Select;

    constructor(public payload: number) {}
}

export class Selected implements Action {
    readonly type = UserActionTypes.Selected;

    constructor(public payload: User) {}
}

export type UserActions = Select | Selected;
