import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
  menuOpen: boolean;
  cocOpen: boolean;
}

const initialState: AppState = {
  menuOpen: false,
  cocOpen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMenuState(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
    setCocState(state, action: PayloadAction<boolean>) {
      state.cocOpen = action.payload;
    },
  },
});

export const {
  setMenuState,
  setCocState,
} = appSlice.actions;

export default appSlice.reducer;
