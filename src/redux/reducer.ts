import { combineReducers } from '@reduxjs/toolkit';

import templateReducer from './slice/template';
import modalReducer from './slice/modal';

const reducer = combineReducers({
  template: templateReducer,
  modal: modalReducer
});

export type AppReducer = ReturnType<typeof reducer>;
export default reducer;
