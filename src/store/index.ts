import {configureStore} from '@reduxjs/toolkit';
import rootReducer, {RootState} from "@store/rootReducer";
import {useSelector} from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export const useRootState = () => useSelector<RootState>(state => state);
export const useAppState = () => useSelector<RootState, RootState['app']>(state => state.app);
export const useSupportState = () => useSelector<RootState, RootState['support']>(state => state.support);

export default store;
