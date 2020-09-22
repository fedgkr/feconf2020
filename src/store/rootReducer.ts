import {combineReducers} from "redux";
import {appSlice} from "@store/slices/appSlice";
import {supportSlice} from "@store/slices/supportSlice";
import {sessionSlice} from "@store/slices/sessionSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  support: supportSlice.reducer,
  session: sessionSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
