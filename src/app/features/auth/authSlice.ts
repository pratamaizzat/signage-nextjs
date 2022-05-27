import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import authService, { LoginData } from './authService'

type Permission = {
  id: number,
  name: string,
  access: string,
  description: string,
}

type Role = {
  id: number,
  name: string,
  display_name: string,
  description: string,
}

type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  photo: string | null,
  phone: string | null,
  address: string | null,
  email_verified_at: string | null,
  last_login: string | null,
  active: number,
  permissions: Permission[],
  roles: Role[]
}

export interface InitialStateUser {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isSuccessMe: boolean;
  message: string | unknown;
}

let user: User | null = null

if (typeof window !== 'undefined') {
  user = JSON.parse(localStorage.getItem('user') || 'null')
}

export const initialState: InitialStateUser = {
  user: user || null,
  isLoading: false,
  isSuccess: false,
  isSuccessMe: false,
  isError: false,
  message: '',
}

export const login = createAsyncThunk('auth/login', async (data: LoginData, thunkApi) => {
  try {
    return await authService.login(data)
  } catch (error) {
    const err = error as AxiosError<any> | Error

    if(axios.isAxiosError(err)) {
      const message = (err.response && err.response.data && err.response.data.message)
      return thunkApi.rejectWithValue(message)
    } else {
      const message = err.message || err.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
})

export const me = createAsyncThunk('auth/me', async (_, thunkApi) => {
  try {
    return await authService.me()
  } catch (error) {
    const err = error as AxiosError<any> | Error

    if(axios.isAxiosError(err)) {
      const message = (err.response && err.response.data && err.response.data.message)
      return thunkApi.rejectWithValue(message)
    } else {
      const message = err.message || err.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isSuccessMe = false;
      state.message = ''
    },
    rehydrate: (state, action: PayloadAction<InitialStateUser>) => {
      state.isLoading = action.payload.isLoading
      state.isSuccess = action.payload.isSuccess
      state.isSuccessMe = action.payload.isSuccessMe
      state.isError = action.payload.isError
      state.message = action.payload.message
      state.user = action.payload.user
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || ''
      })
      .addCase(me.pending, (state) => {
        state.isLoading = true
      })
      .addCase(me.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccessMe = true
        state.user = action.payload
      })
      .addCase(me.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || ''
      })
  }
})

const rootSlice = {
  auth: authSlice.reducer
}

export const { reset, rehydrate } = authSlice.actions

export default rootSlice