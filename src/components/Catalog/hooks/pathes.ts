import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../providers/authProvider';

export const useCatalogPathes = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const pathes = {
    root: `/`,
    collections: `/user/${user?.user_metadata.login}/collections`,
    collection: `/user/${user?.user_metadata.login}/collections/:id`,
    models: `/user/${user?.user_metadata.login}/3d-models`,
    likes: `/user/${user?.user_metadata.login}/likes`,
  };
  const collectionName =
    pathname.split('/')[pathname.split('/').findIndex((v) => v === 'collections') + 1];
  return {
    pathes,
    collectionName,
  };
};
