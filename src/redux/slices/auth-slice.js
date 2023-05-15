import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { axiosBaseUrl, setAuthToken } from '../../configs/axios-config';

const axios = axiosBaseUrl();

export const Login = createAsyncThunk(
  'auth/signIn',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/sign-in', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: {
          error: 'Network Error'
        }
      });
    }
  }
);

export const SignUp = createAsyncThunk(
  'auth/signUp',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/sign-up', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: {
          error: 'Network Error'
        }
      });
    }
  }
);

export const VerifyEmial = createAsyncThunk(
  'auth/verifyEmail',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.get('/auth/verify-email');
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: {
          error: 'Network Error'
        }
      });
    }
  }
);

export const SendEmail = createAsyncThunk(
  'auth/SendEmail',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/resend-email', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: {
          error: 'Network Error'
        }
      });
    }
  }
);

export const ResetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/reset-password', user);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: {
          error: 'Network Error'
        }
      });
    }
  }
);

export const RefreshUser = createAsyncThunk(
  'user/getRefreshUser',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get('/users/');
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: {
          error: 'Network Error'
        }
      });
    }
  }
)

const auth = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    message: '',
    err: '',
    token: '',
    userId: '',
    success: false,
    loading: false,
    role: '',
    isAdmin: false,
    user: '',
    isSignIn: false,
    manifestTab: 0
  },
  reducers: {
    SetAuthState(state, { payload: { field, value } }) {
      state[field] = value;
    },
    LogOut: () => ({
      name: '',
      email: '',
      message: '',
      err: '',
      token: '',
      userId: '',
      success: false,
      loading: false,
      isAdmin: false,
      user: '',
      profileId: '',
      isSignIn: false
    })
  },
  extraReducers: {
    [Login.pending]: (state) => ({
      ...state,
      loading: true,
      isSignIn: false
    }),
    [Login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      const { token } = action.payload;
      state.message = action.payload?.message;
      state.isAdmin = action.payload?.user?.isAdmin;
      state.success = true;
      state.loading = false;
      state.isSignIn = true;
      setAuthToken(token);
    },
    [Login.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false,
    }),
    [VerifyEmial.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [VerifyEmial.fulfilled]: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      message: action.payload.message,
    }),
    [VerifyEmial.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err?.error,
    }),
    [SendEmail.pending]: (state) => ({
      ...state,
      success: false,
      loading: true
    }),
    [SendEmail.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload.message,
      success: true,
      loading: false
    }),
    [SendEmail.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err.error,
      success: false,
      loading: false
    }),
    [ResetPassword.pending]: (state) => ({
      ...state,
      success: false,
      loading: true
    }),
    [ResetPassword.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload.message,
      loading: false,
      success: true
    }),
    [ResetPassword.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      success: true,
      loading: false
    }),
    [RefreshUser.pending]: (state) => ({
      ...state,
      loading: true
    }),
    [RefreshUser.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload.message,
      loading: false,
      isAdmin: action.payload?.user?.isAdmin
    }),
    [RefreshUser.rejected]: (state, action) => ({
      ...state,
      err: action.payload.err?.error,
      loading: false
    })
  }
});

const { reducer, actions } = auth;

export const {
  SetAuthState, LogOut
} = actions;

export default reducer;
