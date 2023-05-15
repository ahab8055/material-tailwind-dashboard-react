import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from './slices/auth-slice';
import playerSlice from './slices/player-slice';
import tournamentSlice from './slices/tournament-slice';
import drawSlice from './slices/draw-slice';

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