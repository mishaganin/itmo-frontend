import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import dataReducers from './slices';

export const makeReduxStore = (state = {}) =>
  configureStore({
    reducer: {
      ...dataReducers,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false
    }),
    preloadedState: state,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeReduxStore);
