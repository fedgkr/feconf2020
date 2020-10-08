import {combineReducers} from "redux";
import {appSlice} from "@store/slices/appSlice";
import {supportSlice} from "@store/slices/supportSlice";
import {sessionSlice} from "@store/slices/sessionSlice";
import {stickySlice} from "./slices/stickySlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  support: supportSlice.reducer,
  session: sessionSlice.reducer,
  sticky: stickySlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
