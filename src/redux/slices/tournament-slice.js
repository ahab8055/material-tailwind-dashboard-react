import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosBaseUrl } from "../../configs/axios-config";

const axios = axiosBaseUrl();

export const GetTournament = createAsyncThunk(
  "tournament/GetTournament", async (params, thunkAPI) => {
  try {
    const { data } = await axios.get("/tournament",{ params });
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

export const AddTournament = createAsyncThunk(
  "tournament/AddTournament", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post("/tournament", payload);
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

const tournament = createSlice({
  name: "tournament",
  initialState: {
    tournaments: [],
    message: "",
    err: "",
    success: false,
    loading: false,
  },
  reducers: {
    SetTournamentState(state, { payload: { field, value } }) {
      state[field] = value;
    },
  },
  extraReducers: {
    [GetTournament.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [GetTournament.fulfilled]: (state, action) => {
      state.tournaments = action.payload.tournaments;
      state.loading = false;
    },
    [GetTournament.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
    [AddTournament.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [AddTournament.fulfilled]: (state, action) => {
      state.message = action.payload?.message;
      state.success = true;
      state.loading = false;
    },
    [AddTournament.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
  },
});

const { reducer, actions } = tournament;

export const { SetTournamentState } = actions;

export default reducer;
