import { PostActions, PostActionTypes } from "../actions/post";
import { Post } from "../models/post";

export interface State {
    posts: Post[];
}

export const initialState: State = {
    posts: []
};

export function reducer(state = initialState, action: PostActions): State {
    switch(action.type) {
        case PostActionTypes.UpdatedAll: {
            return {
                posts: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

// export const getPosts = (state: State) => state.posts;