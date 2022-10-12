import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './item/item.reducer';

export const rootReducer = configureStore({
  reducer: {
    itemModule: itemReducer
  },
});
