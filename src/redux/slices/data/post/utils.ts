import { PostModel } from '.';
import { Tables } from '../../../../interfaces/DatabaseGeneratedTypes';
import { supabase } from '../../../../supabase';
import { path } from '../../../../utils/path';

type PostsIterator = { posts: Tables<'models'>[] | { models: Tables<'models'> }[]; uid?: string };
export const postsIterator = ({ posts, uid }: PostsIterator) => {
  const postModel: PostModel[] = [];
  posts.forEach(async (post) => {
    postStructure({ post, uid, postModel });
  });
  return postModel;
};

type PostStructure = {
  post: Tables<'models'> | { models: Tables<'models'> };
  uid?: string;
  postModel: PostModel[];
};
const postStructure = ({ post, uid, postModel }: PostStructure) => {
  const { getName } = path;
  const exec = async () => {
    if (uid) {
      if ('models' in post) {
        const { data: modelData, error: modelError } = await supabase.storage
          .from('models')
          .list(`${uid}/${getName(post.models.zip_name)}`);
        if (modelError) throw modelError;
        postModel.push({ model: modelData, post: post.models, id: post.id });
      } else {
        const { data: modelData, error: modelError } = await supabase.storage
          .from('models')
          .list(`${uid}/${getName(post.zip_name)}`);

        if (modelError) throw modelError;
        postModel.push({ model: modelData, post: post });
      }
    } else {
      if ('models' in post) {
        const { data: modelData, error: modelError } = await supabase.storage
          .from('models')
          .list(`${post.models.user_id}/${getName(post.models.zip_name)}`);
        if (modelError) throw modelError;
        postModel.push({ model: modelData, post: post.models, id: post.id });
      } else {
        const { data: modelData, error: modelError } = await supabase.storage
          .from('models')
          .list(`${post.user_id}/${getName(post.zip_name)}`);

        if (modelError) throw modelError;
        postModel.push({ model: modelData, post: post });
      }
    }
  };
  exec();
};

// //@ts-nocheck
// import { Tables } from '../../../../interfaces/DatabaseGeneratedTypes';
// import { supabase } from '../../../../supabase';
// import { path } from '../../../../utils/path';
// import { PostModel } from '.';

// type PostsIterator = { posts: Tables<'models'>[] | { models: Tables<'models'> }[]; uid?: string };
// export const postsIterator = ({ posts, uid }: PostsIterator) => {
//   const postModel: PostModel[] = [];
//   posts.forEach(async (post) => {
//     postStructure({ post, uid, postModel });
//   });
//   return postModel;
// };

// type PostStructure = {
//   post: Tables<'models'> | { models: Tables<'models'> };
//   uid?: string;
//   postModel: PostModel[];
// };
// const postStructure = ({ post, uid, postModel }: PostStructure) => {
//   const { getName } = path;
//   const exec = async () => {
//     if (uid) {
//       if ('models' in post && 'id' in post) {
//         const { data: modelData, error: modelError } = await supabase.storage
//           .from('models')
//           .list(`${uid}/${getName(post.models.zip_name)}`);
//         if (modelError) throw modelError;
//         postModel.push({ model: modelData, post: post.models, id: post.id as string });
//       } else {
//         const { data: modelData, error: modelError } = await supabase.storage
//           .from('models')
//           .list(`${uid}/${getName(post.zip_name)}`);

//         if (modelError) throw modelError;
//         postModel.push({ model: modelData, post: post });
//       }
//     } else {
//       if ('models' in post) {
//         const { data: modelData, error: modelError } = await supabase.storage
//           .from('models')
//           .list(`${post.models.user_id}/${getName(post.models.zip_name)}`);
//         if (modelError) throw modelError;
//         postModel.push({ model: modelData, post: post.models, id: post.id as string });
//       } else {
//         const { data: modelData, error: modelError } = await supabase.storage
//           .from('models')
//           .list(`${post.user_id}/${getName(post.zip_name)}`);

//         if (modelError) throw modelError;
//         postModel.push({ model: modelData, post: post });
//       }
//     }
//   };
//   exec();
// };
