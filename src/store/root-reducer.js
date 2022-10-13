import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';

export const rootReducer = configureStore({
  reducer: {
    userModule: userReducer
  },
});
