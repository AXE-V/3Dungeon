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
import { path } from '../../../utils/path';

type Response = {
  success?: true;
  message?: string;
};

const initialState: Tables<'models'> = {
  about: '',
  category: '',
  format: '',
  geometry: '',
  license: '',
  size: 0,
  tags: [],
  title: '',
  user_id: '',
  zip_name: '',
};

type Editpost = {
  postData: TablesInsert<'models'> | TablesUpdate<'models'>;
  zip_name: string;
  modelData: object;
  uid: string | undefined;
};

type ZipResponse = { count: number | null } & Response;

// обновление и вставка поста, вставка файлов
export const editPost = createAsyncThunk('post-model/editPost', async (props: Editpost) => {
  const { data } = await axios.post<ZipResponse>('/zip', props);
  return data;
});

type UnzipResponse = {
  zip_name?: string;
  scene?: {
    path: string;
    format: string;
  };
} & Response;

// распаковка выбранного архива
export const unzipPostData = createAsyncThunk('post-model/unzipPostData', async (file: File) => {
  const formData = new FormData();
  formData.append('zip', file);
  const { data } = await axios.post<UnzipResponse>('/unzip', formData);

  if (!data.success) throw data.message;
  return data;
});

type GenerateGLTFJSXResponse = {
  success: boolean;
  message: string;
};
type GenerateGLTFJSX = {
  scene: string;
  outputBasename: string;
};
// генерация файлов модели
export const generateGLTFJSX = createAsyncThunk(
  'post-model/generateGLTFJSX',
  async ({ scene, outputBasename }: GenerateGLTFJSX) => {
    const { data } = await axios.post<GenerateGLTFJSXResponse>('/generate-gltf-jsx', {
      scene,
      outputBasename,
    });
    return data;
  },
);

type GetUserPosts = {
  userId: string;
  // zip_name: string;
};
// получение всех постов пользователя
export const getUserPosts = createAsyncThunk(
  'post-model/getUserPosts',
  async ({ userId }: GetUserPosts) => {
    const { getName } = path;
    let zipNames: string[] = [];

    const { data: postsData, error: postError } = await supabase
      .from('models')
      .select()
      .eq('user_id', `${userId}`)
      .limit(12);

    (postsData as Tables<'models'>[]).forEach((post) => zipNames.push(getName(post.zip_name)));

    const getModelsData = (): any => {
      zipNames.forEach((zipName) => {
        const modelsData: any[] = [];
        const getData = async () => {
          const { data: modelData, error: modelError } = await supabase.storage
            .from('models')
            .list(`${userId}/${zipName}`);
          if (modelError) throw modelError;
          modelsData.push(modelData);
        };
        getData();
        return modelsData;
      });
    };
    const modelsData = getModelsData();

    if (postError) throw 'error retrieving post data';
    return { postsData: postsData as Tables<'models'>[], modelsData, zipNames };
  },
);

type GetAllZipByUserID = {
  zip_name: string;
  uid: string;
};

export const getAllZipByUserID = createAsyncThunk(
  'post/getAllZipByUserID',
  async ({ uid, zip_name }: GetAllZipByUserID) => {
    const { getName } = path;
    const { data: postData } = supabase.storage
      .from('models')
      .getPublicUrl(`${uid}/${getName(zip_name)}/scene-transformed.glb`);
    const { data: modelData } = supabase.storage
      .from('models')
      .getPublicUrl(`${uid}/${getName(zip_name)}/model.tsx`);
    const { data: zip } = supabase.storage
      .from('models')
      .getPublicUrl(`${uid}/${getName(zip_name)}/${zip_name}`);
    return { zip, postData, modelData };
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
      state.format = payload.scene?.format!;
    });
  },
});

export const postSelector = (state: RootState) => state.postR;
export const postSelectorFormat = (state: RootState) => state.postR.format;
export const postSelectorZipName = (state: RootState) => state.postR.zip_name;
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
