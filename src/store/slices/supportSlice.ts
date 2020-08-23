import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message, User} from "@store/interfaces";

interface SupportState {
  currentUser: User,
  myMessage: Message;
  messageList: Message[];
  supportFormOpen: boolean;
}

const initialState: SupportState = {
  currentUser: null,
  myMessage: null,
  messageList: [],
  supportFormOpen: false,
};

export const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
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
  setCurrentUser,
  setMyMessage,
  setMessageList,
  setSupportForm,
} = supportSlice.actions;

export default supportSlice.reducer;
