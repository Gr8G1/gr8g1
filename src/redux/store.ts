import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';

const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>
export default store;
