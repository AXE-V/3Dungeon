//@ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import axios from '../../../axios';
import { supabase } from '../../../../supabase';
import { Tables, TablesInsert } from '../../../../interfaces/DatabaseGeneratedTypes';
import { path } from '../../../../utils/path';
import { ModelData } from '../../../../interfaces/ModelData';
import { postsIterator } from './utils';

type Additional = {
  downloads: boolean;
};

const initialState: Tables<'models'> & Additional = {
  about: '',
  category: '',
  format: '',
  license: '',
  tags: [],
  title: '',
  user_id: '',
  zip_name: '',
  downloads: false,
};

type Response = {
  success?: true;
  message?: string;
};

type Editpost = {
  post: TablesInsert<'models'>;
  zip_name: string;
  uid: string;
};

type ZipResponse = {} & Response;
// обновление и вставка поста, вставка файлов
export const editPost = createAsyncThunk(
  'post-model/editPost',
  async ({ post, zip_name, uid }: Editpost) => {
    const { data } = await axios.post<ZipResponse>('/zip', { zip_name, uid });
    const row = await supabase.from('models').upsert(post);
    if (row.error) {
      console.log(row.error);
    }
    console.log(row.data);
    return data;
  },
);

type UnzipResponse = {
  zip_name?: string;
  scene?: {
    path: string;
    format: string;
  };
} & Response;

// распаковка выбранного архива
export const unzipPostData = createAsyncThunk('post-model/unzipPostData', async (file: File) => {
  const fd = new FormData();
  fd.append('zip', file);
  const { data } = await axios.post<UnzipResponse>('/unzip', fd);
  if (!data.success) throw data.message;
  return data;
});

type GenerateGLTFJSXResponse = {
  success: boolean;
  message: string;
};
export type GenerateGLTFJSX = {
  scene: string;
  zip_name: string;
  uid: string;
};
// генерация файлов модели
export const generateGLTFJSX = createAsyncThunk(
  'post-model/generateGLTFJSX',
  async (props: GenerateGLTFJSX) => {
    const { data } = await axios.post<GenerateGLTFJSXResponse>('/generate-gltf-jsx', props);
    return data;
  },
);

export type PostModel = {
  id?: string;
  post: Tables<'models'>;
  model: ModelData[];
};

type SetPostLike = { user_id: string; model_id: string; checked: boolean };
export const setPostLike = createAsyncThunk(
  'post-model/setPostLike',
  async ({ user_id, model_id, checked }: SetPostLike) => {
    if (!checked) {
      await supabase.from('likes').delete().eq('model_id', model_id).eq('user_id', user_id);
    } else {
      await supabase.from('likes').insert({ user_id, model_id });
    }
  },
);

type GetPostLike = { user_id: string; model_id: string };
export const getPostLike = createAsyncThunk(
  'post-model/getPostLike',
  async ({ user_id, model_id }: GetPostLike) => {
    const { data, error } = await supabase
      .from('likes')
      .select()
      .eq('user_id', user_id)
      .eq('model_id', model_id)
      .limit(1)
      .single();
    if (error) throw error;
    return data;
  },
);

export const getLikedPosts = createAsyncThunk('post-model/getLikedPosts', async (uid: string) => {
  const { data, error } = await supabase
    .from('likes')
    .select(`models(*)`)
    .eq('user_id', uid)
    .limit(12);
  if (error) throw error;
  return postsIterator({ posts: data, uid: uid });
});

export const getPostCollections = createAsyncThunk(
  'post-model/getPostCollections',
  async (uid: string) => {
    const { data, error } = await supabase
      .from('collections')
      .select(`id, models(*)`)
      .eq('creator_id', uid)
      .limit(12);
    if (error) throw error;
    return postsIterator({ posts: data, uid: uid });
  },
);

export const getAllPosts = createAsyncThunk('post-model/getAllPosts', async () => {
  const { data: posts, error } = await supabase.from('models').select().limit(12);
  if (error) throw error;
  return postsIterator({ posts });
});

// получение всех постов пользователя
export const getUserPosts = createAsyncThunk('post-model/getUserPosts', async (uid: string) => {
  // посты
  const { data: posts, error: postError } = await supabase
    .from('models')
    .select()
    .eq('user_id', `${uid}`)
    .limit(12);
  if (postError) throw 'error retrieving post data';
  return postsIterator({ posts, uid });
});

export const downloadModel = createAsyncThunk(
  'post-model/downloadModel',
  async (post: Tables<'models'>) => {
    const { data } = await axios.post('/download-zip', { post });
    return data;
  },
);

export const getLoadedModels = createAsyncThunk('post-model/getLoadedModels', async () => {
  await axios.post('/get-loaded-models');
});

export const deletePost = createAsyncThunk(
  'post-model/deletePost',
  async (post: Tables<'models'>) => {
    const { data, error } = await supabase.from('models').delete().eq('id', post.id).select();
    if (error) throw error;
    console.log(data);
    return data;
  },
);

export type DeleteCollection = {
  id: string;
  uid: string;
};
export const deletePostCollection = createAsyncThunk(
  'post-model/deletePost',
  async ({ id, uid }: DeleteCollection) => {
    const { data, error } = await supabase
      .from('collections')
      .delete()
      .eq('id', id)
      .eq('creator_id', uid)
      .select();
    if (error) throw error;
    console.log(data);
    return data;
  },
);

// используется в каждой карте поста, делает запрос и скачивает файлы модели. Принимает данные поста и файлы модели
type LoadPostFiles = { post: Tables<'models'>; model: ModelData[] };
export const loadPostFiles = createAsyncThunk(
  'post-model/loadPostFiles',
  async ({ post, model }: LoadPostFiles) => {
    const { getName } = path;
    const { data } = await axios.post('/check-path-generated', { post, model });
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
    setPostLicense(state, { payload }) {
      state.license = payload;
    },
    setPostRating(state, { payload }) {
      state.rating = payload;
    },
    setPostTags(state, { payload }) {
      state.tags = payload;
    },
    setPostUser(state, { payload }) {
      state.user_id = payload;
    },
    clearPostData() {
      return initialState;
    },
    setAllPostData: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(unzipPostData.fulfilled, (state, { payload }) => {
      state.zip_name = payload.zip_name!;
      state.format = payload.scene?.format!;
    });
    builder.addCase(downloadModel.pending, (state) => {
      return { ...state, downloads: true };
    });
    builder.addCase(downloadModel.fulfilled, (state) => {
      return { state, downloads: false };
    });
  },
});

export const postSelector = (state: RootState) => state.postR;
export const postSelectorFormat = (state: RootState) => state.postR.format;
export const postSelectorZipName = (state: RootState) => state.postR.zip_name;
export const postSelectorDownloads = (state: RootState) => state.postR.downloads;
export const {
  setPostTitle,
  setPostAbout,
  setPostCategory,
  setPostFormat,
  setPostLicense,
  setPostRating,
  setPostTags,
  setPostUser,
  clearPostData,
  setAllPostData,
} = postSlice.actions;
export const postR = postSlice.reducer;
