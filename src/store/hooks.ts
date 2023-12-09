import { TypedUseSelectorHook, useSelector, useDispatch, useStore } from 'react-redux';

import { AppDispatch, RootState } from './store.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = () => useStore<RootState>();
