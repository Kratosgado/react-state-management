import { PostReducer } from './PostReducer';
import { UserReducer } from './UserReducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
   user: UserReducer,
   post: PostReducer
});

export type AppState = ReturnType<typeof rootReducer>;