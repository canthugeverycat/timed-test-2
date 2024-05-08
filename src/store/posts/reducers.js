import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from './action-types';

const initialState = {
    data: [],
    isFetching: false,
    hasError: false,
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, isFetching: true, hasError: false };
        case FETCH_POSTS_SUCCESS:
            const { data } = action.payload;
            return { ...state, data, isFetching: false };
        case FETCH_POSTS_FAILURE:
            return { ...state, isFetching: false, hasError: true };
        default:
            return state;
    }
}