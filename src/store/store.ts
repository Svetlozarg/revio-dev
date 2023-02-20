import { configureStore } from '@reduxjs/toolkit';
import broadcastSlice from './slices/broadcast/broadcastSlice';

export const store = configureStore({
  reducer: {
    broadcast: broadcastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
