import { Tables, TablesInsert } from '../interfaces/db';
import { TableModels } from '../redux/slices/data/post';
import { supabase } from '../supabase';

export const createPost = async (params: TablesInsert<'models'>) => {
  const { data, error } = await supabase.from('models').insert(params);
  if (error) {
    console.log(error);
  }
  return { data, error };
};

// export const createPost = async (params: TableModels) => {
//   const { data, error } = await supabase.from('models').upsert(params);
//   if (error) {
//     console.log(error);
//   }
//   console.log(data);

//   return { data, error };
// };
