import * as fromPost from '../posts/reducers/post';
import { Post } from '../posts/models/post';

export interface State {
    posts: Post[];
}

export const reducers = {
    posts: fromPost.reducer
};

export const getPosts = (state: State) => state.posts;