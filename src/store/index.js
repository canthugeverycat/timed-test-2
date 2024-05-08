import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './posts/reducers';

const rootReducer = combineReducers({
    posts: postsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;