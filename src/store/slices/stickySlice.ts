import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWindowInfo, useWindowResize } from "@utils/hooks/use-window";
import { RefObject, useEffect } from "react";

interface SectionOffset {
  top: number;
  height: number;
  offset: number;
  endOffset: number;
}
interface StickyState {
  isFixed: boolean;
  translateY: number;
  offsets: SectionOffset[],
}

const initialState: StickyState = {
  isFixed: false,
  translateY: 0,
  offsets: [
    { top: 0, height: 0, offset: 0, endOffset: 0 },
    { top: 0, height: 0, offset: 0, endOffset: 0 },
  ],
};

export const stickySlice = createSlice({
  name: 'sticky',
  initialState,
  reducers: {
    setFixed(state, action: PayloadAction<boolean>) {
      state.isFixed = action.payload;
    },
    setOffset(state, action: PayloadAction<[number, SectionOffset]>) {
      const [order, offset] = action.payload;
      const offsets = state.offsets;

      offsets[order] = offset;
      state.offsets = [...offsets];
    },
  },
});


export const {
  setFixed,
  setOffset,
} = stickySlice.actions;

export default stickySlice.reducer;
