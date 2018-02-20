import { PostActions, PostActionTypes } from '../actions/post';
import { Post } from '../models/post';
import { createSelector } from '@ngrx/store';

export interface State {
    posts: Post[];
    selectedPostId: number;
}

export const initialState: State = {
    posts: [],
    selectedPostId: 0
};

export function reducer(state = initialState, action: PostActions): State {
    switch (action.type) {
        case PostActionTypes.UpdatedAll: {
            return {
                ...state,
                posts: action.payload
            };
        }
        case PostActionTypes.Selected: {
            return {
                ...state,
                selectedPostId: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export const getPosts = (state: State) => state.posts;

export const getSelectedPostId = (state: State) => state.selectedPostId;

export const getSelectedPost = createSelector(
    getPosts,
    getSelectedPostId,
    (posts, selectedPostId) => posts.find(p =>
        p.id === selectedPostId
    )
);

