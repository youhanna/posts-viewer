import { UserActions, UserActionTypes } from '../actions/user';
import { User } from '../models/user';
import { createSelector } from '@ngrx/store';

export interface State {
    user: User;
}

export const initialState: State = {
    user: null
};

export function reducer(state = initialState, action: UserActions): State {
    switch (action.type) {
        case UserActionTypes.Selected : {
            return {
                ...state,
                user: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export const getUser = (state: State) => state.user;
