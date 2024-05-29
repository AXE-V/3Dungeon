// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from '../../axios';
import { supabase } from '../../../supabase';
import { Database, Json, Tables, TablesInsert } from '../../../interfaces/db';

export type TableModels = {
  about?: string;
  category?: string;
  format?: string;
  geometry?: Json;
  license?: string;
  rating?: number | null;
  size?: number;
  tags?: string[];
  title?: string;
  user_id?: string;
  view_count?: number | null;
  id?: string;
  created_at?: string;
  //
} & Debug;

type Debug = {
  error?: PostgrestError | null;
};

const initialState: TableModels = {
  title: '',
  about: '',
  category: 'all category',
  format: '.gltf',
  geometry: JSON.stringify(''),
  license: 'cc by',
  rating: 0,
  size: 0,
  tags: [],
  user_id: '',
  // не обязательные, авто
  // view_count: 0,
  // id: '',
  // created_at: '',
};

// обновление и вставка поста
export const editPost = createAsyncThunk('post-model/createPost', async (params: TableModels) => {
  const { data, error } = await supabase.from('models').upsert(params);
  if (error) {
    console.log(error);
  }
  console.log(data);
  return { data, error };
});
// export const editPost = createAsyncThunk(
//   'post-model/createPost',
//   async (params: TablesInsert<'models'>) => {
//     const { data, error } = await supabase.from('models').upsert(params);
//     if (error) {
//       console.log(error);
//     }
//     return { data, error };
//   },
// );

// получение поста
export const getPost = createAsyncThunk('post-model/createPost', async () => {
  const { data, error } = await supabase.from('models').select();
  if (error) {
    console.log(error);
  }
  console.log(data);

  return { data, error };
});

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
  },
  extraReducers: (builder) => {
    builder.addCase(editPost.pending, (state) => {
      state = null;
      state.error = null;
    });
    builder.addCase(editPost.fulfilled, (state, { payload }) => {
      state = payload.data;
      state.error = payload.error;
    });
    builder.addCase(editPost.rejected, (state, { payload }) => {
      state = payload.data;
      state.error = payload.error;
    });
    // builder.addCase(getPost.fulfilled, (state, { payload }) => {});
  },
});

export const postSelector = (state: RootState) => state.postR;
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
} = postSlice.actions;
export const postR = postSlice.reducer;
