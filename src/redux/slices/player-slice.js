import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosBaseUrl } from "@/configs/axios-config";

const axios = axiosBaseUrl();

export const GetPlayers = createAsyncThunk(
  "player/GetPlayers", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/player");
    return data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: {
        error: "Network Error",
      },
    });
  }
});

export const AddPlayer = createAsyncThunk(
  "player/AddPlayer", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post("/player", payload);
    return data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: {
        error: "Network Error",
      },
    });
  }
});

const player = createSlice({
  name: "player",
  initialState: {
    players: [],
    message: "",
    err: "",
    success: false,
    loading: false,
  },
  reducers: {
    SetPlayerState(state, { payload: { field, value } }) {
      state[field] = value;
    },
  },
  extraReducers: {
    [GetPlayers.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [GetPlayers.fulfilled]: (state, action) => {
      state.players = action.payload.players;
      state.loading = false;
    },
    [GetPlayers.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
    [AddPlayer.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [AddPlayer.fulfilled]: (state, action) => {
      state.message = action.payload?.message;
      state.success = true;
      state.loading = false;
    },
    [AddPlayer.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
  },
});

const { reducer, actions } = player;

export const { SetPlayerState } = actions;

export default reducer;
