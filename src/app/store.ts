import {configureStore} from '@reduxjs/toolkit';
import {doorReducer} from '../components/Door/doorSlice';

export  const store = configureStore({
  reducer: {
    door: doorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;