import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
  menuOpen: boolean;
}

const initialState: AppState = {
  menuOpen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMenuState(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
  },
});

export const {
  setMenuState,
} = appSlice.actions;

export default appSlice.reducer;
