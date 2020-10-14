import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Session, Track} from "@constants/types";
import {sessionList} from "@resources/data";

interface SessionState {
  selectedTrack: Track;
  sessions: Session[];
  selectedSession: Session;
}

const initialState: SessionState = {
  selectedTrack: Track.A,
  sessions: sessionList,
  selectedSession: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setTrack(state, action: PayloadAction<Track>) {
      state.selectedTrack = action.payload;
    },
    setSession(state, action: PayloadAction<Session>) {
      state.selectedSession = action.payload;
    },
  },
});

export const {
  setTrack,
  setSession,
} = sessionSlice.actions;

export default sessionSlice.reducer;
