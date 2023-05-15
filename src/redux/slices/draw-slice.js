import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosBaseUrl } from "../../configs/axios-config";

const axios = axiosBaseUrl();

export const GetDraws = createAsyncThunk(
  "draw/GetDraws", async (params, thunkAPI) => {
  try {
    const { data } = await axios.get("/draw",{ params });
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

export const AddDraw = createAsyncThunk(
  "draw/AddDraw", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post("/draw", payload);
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

const draw = createSlice({
  name: "draw",
  initialState: {
    draws: [],
    message: "",
    err: "",
    success: false,
    loading: false,
  },
  reducers: {
    SetDrawState(state, { payload: { field, value } }) {
      state[field] = value;
    },
  },
  extraReducers: {
    [GetDraws.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [GetDraws.fulfilled]: (state, action) => {
      state.draws = action.payload.draws;
      state.loading = false;
    },
    [GetDraws.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
    [AddDraw.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [AddDraw.fulfilled]: (state, action) => {
      state.message = action.payload?.message;
      state.success = true;
      state.loading = false;
    },
    [AddDraw.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
  },
});

const { reducer, actions } = draw;

export const { SetDrawState } = actions;

export default reducer;
