import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import reducers from './slices';

export const makeReduxStore = (state = {}) =>
  configureStore({
    reducer: {
      ...reducers,
    },
    preloadedState: state,
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
