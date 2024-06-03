// //@ts-nocheck
import {
  Action,
  ThunkDispatch,
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from '../../axios';
import { supabase } from '../../../supabase';
import {
  Database,
  Json,
  Tables,
  TablesInsert,
  TablesUpdate,
} from '../../../interfaces/DatabaseGeneratedTypes';
import { PostgrestError, User } from '@supabase/supabase-js';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../providers/authProvider';

type Response = {
  success?: true;
  message?: string;
};

type UnzipResponse = {
  zip_name?: string;
  scene?: {
    path: string;
    format: string;
  };
} & Response;

type ZipResponse = { count: number | null } & Response;

// type AdditionalData = {
//   zip?: UnzipResponse | null;
// };

// export type InitialState = Tables<'models'> & AdditionalData;

const initialState: Tables<'models'> = {
  about: '',
  category: '',
  format: '',
  geometry: '',
  license: '',
  tags: [],
  title: '',
  user_id: '',
  zip_name: '',
  scene: '',
};

type Editpost = {
  data: TablesInsert<'models'> | TablesUpdate<'models'>;
  zip_name: string;
  uid: string | undefined;
};

// обновление и вставка поста
export const editPost = createAsyncThunk(
  'post-model/editPost',
  async ({ data, zip_name, uid }: Editpost) => {
    const { data: zip } = await axios.post<ZipResponse>('/zip', { zip_name, uid, data });

    return {
      zip,
    };
  },
);

// распаковка выбранного архива
export const unzipPostData = createAsyncThunk('post-model/unzipPostData', async (file: File) => {
  const formData = new FormData();
  formData.append('zip', file);
  const { data } = await axios.post<UnzipResponse>('/unzip', formData);

  if (!data.success) throw data.message;
  return data;
});

// получение всех постов пользователя
export const getUserPosts = createAsyncThunk('post-model/getUserPosts', async (userId: string) => {
  const { data, error } = await supabase
    .from('models')
    .select()
    .eq('user_id', `${userId}`)
    .limit(12);
  if (error) throw error;
  return { data };
});

type GetAllZipByUserID = {
  zip_name: string;
  uid: string;
};

export const getAllZipByUserID = createAsyncThunk(
  'post/getAllZipByUserID',
  async ({ uid, zip_name }: GetAllZipByUserID) => {
    const { data } = supabase.storage.from('models').getPublicUrl(`${uid}/${zip_name}`);
    return data;
  },
);

const postSlice = createSlice({
  name: 'post-model',
  initialState,
  reducers: {
    setPostTitle(state, { payload }) {
      state.title = payload;
    },
    setPostAbout(state, { payload }) {
      state.about = payload;
    },
    setPostCategory(state, { payload }) {
      state.category = payload;
    },
    setPostFormat(state, { payload }) {
      state.format = payload;
    },
    setPostGeometry(state, { payload }) {
      state.geometry = payload;
    },
    setPostLicense(state, { payload }) {
      state.license = payload;
    },
    setPostRating(state, { payload }) {
      state.rating = payload;
    },
    setPostSize(state, { payload }) {
      state.size = payload;
    },
    setPostTags(state, { payload }) {
      state.tags = payload;
    },
    setPostUser(state, { payload }) {
      state.user_id = payload;
    },
    // clearPostZip(state) {
    //   state.zip = null;
    // },
    clearPostData(state) {
      state.about = '';
      state.category = '';
      state.format = '';
      state.geometry = '';
      state.license = '';
      state.tags = [];
      state.title = '';
      state.user_id = '';
      state.zip_name = '';
      state.scene = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(unzipPostData.fulfilled, (state, { payload }) => {
      state.zip_name = payload.zip_name!;
      state.scene = payload.scene?.path!;
      state.format = payload.scene?.format!;
    });
    // builder.addCase(unzipPostData.fulfilled, (state, { payload }) => {
    //   state.zip = payload;
    // });
  },
});

export const postSelector = (state: RootState) => state.postR;
// export const postSelectorScene = (state: RootState) => state.postR.zip?.scene;
export const postSelectorScene = (state: RootState) => state.postR.scene;
export const postSelectorFormat = (state: RootState) => state.postR.format;
export const {
  setPostTitle,
  setPostAbout,
  setPostCategory,
  setPostFormat,
  setPostGeometry,
  setPostLicense,
  setPostRating,
  setPostSize,
  setPostTags,
  setPostUser,
  // clearPostZip,
  clearPostData,
} = postSlice.actions;
export const postR = postSlice.reducer;
