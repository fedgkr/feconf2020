import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Session, Track} from "@constants/types";
import {sessionList} from "@resources/data";

interface SessionState {
  selectedTrack: Track;
  sessions: Session[];
}

const initialState: SessionState = {
  selectedTrack: Track.A,
  sessions: sessionList,
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
  setTrack,
} = sessionSlice.actions;

export default sessionSlice.reducer;
