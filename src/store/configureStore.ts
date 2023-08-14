// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './AppState';

const configStore = configureStore({
      reducer: rootReducer
   });


export default configStore