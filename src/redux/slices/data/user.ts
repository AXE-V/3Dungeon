import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../../supabase";
import { AuthError, Session } from "@supabase/supabase-js";
import { RootState } from "../../store";

type UserFields = {
  image?: string
  skills?: string[]
  links?: Link[]
  location?: string
  about?: string
  likes?: {}
  login: string
}
type Link = {name: string, url: string}

export interface UserData {
  data: UserFields
  session: Session | null
  error: AuthError | null,
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: UserData = {
  data: {
    image: '',
    skills: [],
    links: [],
    location: '',
    about: '',
    likes: {},
    login: 'user'
  },
  session: null,
  error: null,
  status: 'idle'
}

export const setSession = createAsyncThunk('suer/getSession', async () => {
  let sessionUser = null
  // получение текущей сессии пользователя, если он авторизован
  await supabase.auth.getSession().then(({ data: {session} }) => {
    sessionUser = session
    // console.log(session);
  })
  // вообще используется для прослушивания изменений состояния авторизации и обновления пользовательского интерфейса или выполнения других действий в соответствии с изменениями
  supabase.auth.onAuthStateChange((_event, session) => {
    sessionUser = session  
    // console.log(session);
  })  
  return sessionUser
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setSession.pending, (state) => {
      state.session = null
      state.status = 'loading'
    }),
    builder.addCase(setSession.fulfilled, (state, {payload}) => {
      state.session = payload
      state.status = 'succeeded',
      console.log(state.session);
    }),
    builder.addCase(setSession.rejected, (state) => {
      state.session = null
      state.status = 'failed'
    })

  }
})

// export const {sessionUser} = userSlice.actions
export const userState = (state: RootState) => state.userReducer
export const userReducer = userSlice.reducer