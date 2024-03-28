import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../../supabase";
import { FormInputs } from "../../../interfaces/FormInputs";
import { AuthError, Session, User } from "@supabase/supabase-js";
import { RootState } from "../../store";

interface UserData {
  data: {
    user: User | null;
    session: Session | null;
  } | {
    user: null;
    session: null;
  },
  error: AuthError | null
}

type Status = 'loading' | 'loaded' | 'error'

const initialState: UserData & {status: Status} = {
  data: {
    user: null,
    session: null,
  },
  error: null,
  status: 'loading',
}

export const registerUser = createAsyncThunk('auth/registerUser', async (params: FormInputs) => {
  const {data, error} = await supabase.auth.signUp({
    email: params.email,
    password: params.password,
    options: {
      data: {
        login: params.login
      }
    }
  })
  return {data, error}
})

export const loginUser = createAsyncThunk('auth/loginUser', async (params: FormInputs) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    password: params.password,
    email: params.email
  })
  return {data, error}
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUser.pending, (state) => {
      state.data = null!
      state.status = 'loading'
    }),
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      state.data = payload.data
      state.error = payload.error
      state.status = 'loaded'
    }),
    builder.addCase(registerUser.rejected, (state) => {
      state.data = null!
      state.status = 'error'
    }),

    builder.addCase(loginUser.pending, (state) => {
      state.data = null!
      state.status = 'loading'
    }),
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
      state.data = payload.data
      state.error = payload.error
      state.status = 'loaded'
    }),
    builder.addCase(loginUser.rejected, (state) => {
      state.data = null!
      state.status = 'error'
    })
  }
})

export const authState = (state: RootState) => state.authReducer
export const authReducer = authSlice.reducer