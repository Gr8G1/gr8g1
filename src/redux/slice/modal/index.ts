import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AppState } from '@/redux/store';

export interface ModalState {
  status: boolean;
}

export const modalSlice = createSlice({
  // # Default
  name: 'Modal',
  // # State
  initialState: {
    status: false
  } as ModalState,
  reducers: {
    _setModalStatus: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    }
  }
});

// # State
export const _modalStatus = ({ modal }: AppState) => modal.status;

// # Actions
export const {
  _setModalStatus
} = modalSlice.actions;

// # Reducer
export default modalSlice.reducer;
