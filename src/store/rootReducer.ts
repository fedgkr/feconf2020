import {combineReducers} from "redux";
import {appSlice} from "@store/slices/appSlice";
import {supportSlice} from "@store/slices/supportSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  support: supportSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
