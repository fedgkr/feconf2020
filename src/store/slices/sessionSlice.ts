import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SessionState {
  selectedTrack: Track;
  speakers: Speaker[];
}

const initialState: SessionState = {
  selectedTrack: Track.A,
  speakers: [],
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setTrack(state, action: PayloadAction<Track>) {
      state.selectedTrack = action.payload;
    },
  },
});

export const {
} = sessionSlice.actions;

export default sessionSlice.reducer;
