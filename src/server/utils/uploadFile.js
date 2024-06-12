import { supabase } from '../supabase.js';

export const uploadFile = async (bucketName, filePath, fileData, options) => {
  const { error } = await supabase.storage.from(bucketName).upload(filePath, fileData, options);

  if (error) {
    throw error;
  }

  console.log(`File uploaded to ${filePath}`);
};
