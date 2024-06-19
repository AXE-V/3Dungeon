import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../providers/authProvider';
import {
  setCatalogData,
  setCatalogFilteredData,
  setCatalogPath,
} from '../../../redux/slices/data/filter';
import { useCustomDispatch } from '../../../hooks/useCustomDispatch';
import { useState } from 'react';
import {
  getAllPosts,
  getLikedPosts,
  getPostCollections,
  getUserPosts,
} from '../../../redux/slices/data/post';

export const useCatalogPathes = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [labelPath, setLabelPath] = useState('');
  const dispatch = useCustomDispatch();

  type PathFunction = {
    cb: () => any;
    path: string;
    pathLabel: string;
  };

  const pathFunction = async ({ cb, path, pathLabel }: PathFunction) => {
    try {
      const data = await dispatch(cb()).unwrap();
      setLabelPath(pathLabel);
      setTimeout(() => {
        dispatch(setCatalogData(data));
        dispatch(setCatalogFilteredData(data));
        dispatch(setCatalogPath(path));
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const pathes = {
    root: `/`,
    collections: `/user/${user?.user_metadata.login}/collections`,
    collection: `/user/${user?.user_metadata.login}/collections/:id`,
    models: `/user/${user?.user_metadata.login}/3d-models`,
    likes: `/user/${user?.user_metadata.login}/likes`,
  };

  const collectionName =
    pathname.split('/')[pathname.split('/').findIndex((v) => v === 'collections') + 1];

  const swithPath = () => {
    switch (pathname) {
      case pathes.root:
        console.log(`(root) получение данных`);
        pathFunction({ cb: () => getAllPosts(), path: pathes.root, pathLabel: 'main page' });
        break;
      case pathes.collections:
        console.log(`(collections) получение данных`);
        pathFunction({
          cb: () => getPostCollections(user?.id!),
          path: pathes.collections,
          pathLabel: 'collections',
        });
        break;
      case pathes.models:
        console.log(`(models) получение данных`);
        pathFunction({
          cb: () => getUserPosts(user?.id!),
          path: pathes.models,
          pathLabel: 'models',
        });
        break;
      case pathes.likes:
        console.log(`(likes) получение данных`);
        pathFunction({
          cb: () => getLikedPosts(user?.id!),
          path: pathes.likes,
          pathLabel: 'likes',
        });
        break;
    }
  };

  return {
    swithPath,
    labelPath,
    pathes,
    collectionName,
  };
};

// import { useLocation } from 'react-router-dom';
// import { useAuth } from '../../../providers/authProvider';

// export const useCatalogPathes = () => {
//   const { user } = useAuth();
//   const { pathname } = useLocation();
//   const pathes = {
//     root: `/`,
//     collections: `/user/${user?.user_metadata.login}/collections`,
//     collection: `/user/${user?.user_metadata.login}/collections/:id`,
//     models: `/user/${user?.user_metadata.login}/3d-models`,
//     likes: `/user/${user?.user_metadata.login}/likes`,
//   };
//   const collectionName =
//     pathname.split('/')[pathname.split('/').findIndex((v) => v === 'collections') + 1];

//   return {
//     pathes,
//     collectionName,
//   };
// };
