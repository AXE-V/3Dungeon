// //@ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from '../../axios';
import { supabase } from '../../../supabase';
import { Tables, TablesInsert, TablesUpdate } from '../../../interfaces/DatabaseGeneratedTypes';
import { path } from '../../../utils/path';
import { ModelData } from '../../../interfaces/ModelData';

type Response = {
  success?: true;
  message?: string;
};

const initialState: Tables<'models'> = {
  about: '',
  category: '',
  format: '',
  license: '',
  tags: [],
  title: '',
  user_id: '',
  zip_name: '',
};

type Editpost = {
  post: TablesInsert<'models'>;
  zip_name: string;
  // modelData: object;
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
  post: Tables<'models'>;
  model: ModelData[];
};

// получение всех постов пользователя
export const getUserPosts = createAsyncThunk('post-model/getUserPosts', async (uid: string) => {
  const { getName } = path;
  const data: PostModel[] = [];
  // посты
  const { data: postsData, error: postError } = await supabase
    .from('models')
    .select()
    .eq('user_id', `${uid}`)
    .limit(12);

  if (postError) throw 'error retrieving post data';

  (postsData as Tables<'models'>[]).forEach(async (post) => {
    // все файлы к посту
    const { data: modelData, error: modelError } = await supabase.storage
      .from('models')
      .list(`${uid}/${getName(post.zip_name)}`);

    if (modelError) throw modelError;
    data.push({ model: modelData, post: post });
  });

  return data;
});

type GetPostFiles = { post: Tables<'models'>; model: ModelData[] };
export const loadPostFiles = createAsyncThunk(
  'post-model/loadPostFiles',
  async ({ post, model }: GetPostFiles) => {
    const { getName } = path;

    const fd = new FormData();
    model.map(async (obj) => {
      // blobs
      const { data, error } = await supabase.storage
        .from('models')
        .download(`${post.user_id}/${getName(post.zip_name)}/${obj.name}`);
      if (error) throw error;

      console.log(data);

      if (data.type === 'application/octet-stream') {
        fd.append('file', data, 'scene-transformed.glb');
      }
      if (data.type === 'application/typescript') {
        fd.append('file', data, 'scene.tsx');
      }
    });
    fd.append('zip_name', post.zip_name);
    fd.append('user_id', post.user_id);
    setTimeout(async () => {
      await axios.post('/load-gltf-jsx', fd);
    }, 1000);
  },
);
// type GetPostFiles = { post: Tables<'models'>; model: ModelData[] };
// export const loadPostFiles = createAsyncThunk(
//   'post-model/loadPostFiles',
//   async ({ post, model }: GetPostFiles) => {
//     const { getName } = path;
//     const blobs: Blob[] = [];

//     model.map(async (obj) => {
//       const blobObj = await supabase.storage
//         .from('models')
//         .download(`${post.user_id}/${getName(post.zip_name)}/${obj.name}`);
//       if (blobObj.error) throw blobObj.error;
//       // blobObj.data.type
//       blobs.push(blobObj.data);
//     });

//     const { data } = await axios.post('/load-gltf-jsx', {
//       blobs,
//       zip_name: post.zip_name,
//       uid: post.user_id,
//     });
//     return blobs;
//   },
// );

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
    clearPostData(state) {
      state.about = '';
      state.category = '';
      state.format = '';

      state.license = '';
      state.tags = [];
      state.title = '';
      state.user_id = '';
      state.zip_name = '';
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
  setPostLicense,
  setPostRating,
  setPostTags,
  setPostUser,
  clearPostData,
} = postSlice.actions;
export const postR = postSlice.reducer;
