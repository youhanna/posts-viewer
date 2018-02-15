import * as fromPost from '../posts/reducers/post';
import { Post } from '../posts/models/post';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
    posts: fromPost.State
}

export const reducers = {
    posts: fromPost.reducer
};

export const getPostsState = createFeatureSelector<fromPost.State>('posts');

export const getPosts = createSelector(
    getPostsState,
    fromPost.getPosts
);

export const getSelectedPost = createSelector(getPostsState, fromPost.getSelectedPost);
