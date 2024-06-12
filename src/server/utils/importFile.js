// import path from 'path';
// import { __dname } from './global.js';
// import { register } from 'ts-node';

// register({
//   // Register .tsx extension
//   transpileOnly: true,
//   compilerOptions: {
//     module: 'commonjs',
//     allowSyntheticDefaultImports: true,
//   },
// });

// export const importFile = async (post, fileBaseName) => {
//   const filePath = path.join(
//     __dname,
//     '../..',
//     `/public/models/data/${post.user_id}/${path.parse(post.zip_name).name}/${fileBaseName}`,
//   );
//   const fileUrl = new URL(`file://${filePath}`);
//   return await import(fileUrl.href);
// };
