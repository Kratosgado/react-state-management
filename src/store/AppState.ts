import { UserReducer } from './UserReducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
   user: UserReducer
});

export type AppState = ReturnType<typeof rootReducer>;