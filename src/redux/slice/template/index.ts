import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; // ~ ↖ Single Import

export interface TemplateState {
  status: boolean;
}

export const templateSlice = createSlice({
  // # Default
  name: 'Template',
  // # State
  initialState: {
    status: false
  } as TemplateState,
  reducers: {
    _setTemplateStatus: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    }
  }
});

// # State
export const _exampleStatus = ({ templateSlice }) => templateSlice.status;

// # Actions
export const {
  _setTemplateStatus
} = templateSlice.actions;

// # Reducer
export default templateSlice.reducer;

// ~ [PAGE]
/*
import { useSelector, useDispatch } from 'react-redux';
import { templateState, _templateStatus, _setTemplateStatus } from '@/redux/slice/template';

const exampleStatus = useSelector<>(_exampleStatus);
const dispatch = useDispatch();

dispatch(_setTemplateStatus(!_exampleStatus));
*/