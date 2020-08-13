import {combineReducers} from "redux";
import {appSlice} from "@store/slices/appSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
