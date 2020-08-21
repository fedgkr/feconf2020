import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
  menuOpen: boolean;
  cocOpen: boolean;
  supportFormOpen: boolean;
}

const initialState: AppState = {
  menuOpen: false,
  cocOpen: false,
  supportFormOpen: false,
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
    setSupportForm(state, action: PayloadAction<boolean>) {
      state.supportFormOpen = action.payload;
    },
  },
});

export const {
  setMenuState,
  setCocState,
  setSupportForm,
} = appSlice.actions;

export default appSlice.reducer;
