import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message} from "@store/interfaces";

interface SupportState {
  myMessage: Message;
  messageList: Message[];
  supportFormOpen: boolean;
}

const initialState: SupportState = {
  myMessage: null,
  messageList: [],
  supportFormOpen: false,
};

export const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    setMyMessage(state, action: PayloadAction<Message>) {
      state.myMessage = action.payload;
    },
    setMessageList(state, action: PayloadAction<Message[]>) {
      state.messageList = action.payload;
    },
    setSupportForm(state, action: PayloadAction<boolean>) {
      state.supportFormOpen = action.payload;
    },
  },
});

export const {
  setMyMessage,
  setMessageList,
  setSupportForm,
} = supportSlice.actions;

export default supportSlice.reducer;
