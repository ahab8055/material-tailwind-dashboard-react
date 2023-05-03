import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from '@/redux/slices/auth-slice';
import playerSlice from '@/redux/slices/player-slice';
import tournamentSlice from '@/redux/slices/tournament-slice';
import drawSlice from '@/redux/slices/draw-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const reducers = combineReducers({
  auth: authSlice,
  player: playerSlice,
  tournament: tournamentSlice,
  draw: drawSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
  devTools: true
});