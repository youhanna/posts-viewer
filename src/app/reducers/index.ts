import * as fromPost from '../posts/reducers/post';
import * as fromUser from '../users/reducers/user';
import { Post } from '../posts/models/post';
import { User } from '../users/models/user';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
    posts: fromPost.State;
    user: fromUser.State;
}

export const reducers = {
    posts: fromPost.reducer,
    user: fromUser.reducer
};

export const getPostsState = createFeatureSelector<fromPost.State>('posts');

export const getPosts = createSelector(
    getPostsState,
    fromPost.getPosts
);

export const getSelectedPost = createSelector(getPostsState, fromPost.getSelectedPost);

export const getUserState = createFeatureSelector<fromUser.State>('user');

export const getUser = createSelector(
    getUserState,
    fromUser.getUser
);
