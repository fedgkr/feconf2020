import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Message, User} from "@store/interfaces";

interface SupportState {
  currentUser: User,
  myMessage: Message;
  messageList: Message[];
  metadata: SupportMetadata;
  authenticating: boolean;
  supportFormOpen: boolean;
}

interface SupportMetadata {
  count: number;
}

const initialState: SupportState = {
  metadata: {
    count: 0,
  },
  currentUser: null,
  myMessage: null,
  messageList: [],
  authenticating: false,
  supportFormOpen: false,
};

export const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    setMetaData(state, action: PayloadAction<SupportMetadata>) {
      state.metadata = action.payload;
    },
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
    setAuthentication(state, action: PayloadAction<boolean>) {
      state.authenticating = action.payload;
    },
  },
});

export const {
  setMetaData,
  setCurrentUser,
  setMyMessage,
  setMessageList,
  setSupportForm,
  setAuthentication,
} = supportSlice.actions;

export default supportSlice.reducer;
