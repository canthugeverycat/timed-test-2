import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from './action-types';

export const fetchPosts = () => ({
    type: FETCH_POSTS,
});

export const fetchPostsSuccess = (data) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: { data },
});

export const fetchPostsFailure = () => ({
    type: FETCH_POSTS_FAILURE,
});
