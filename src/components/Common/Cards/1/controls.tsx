import { useEffect, useState } from 'react';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import {
  PostModel,
  deletePost,
  downloadModel,
  getCollectionID,
  getPostLike,
  setAllPostData,
  setPostLike,
} from '../../../../redux/slices/data/post';
import { Tables } from '../../../../interfaces/DatabaseGeneratedTypes';
import { useAuth } from '../../../../providers/authProvider';
import { addCartItem } from '../../../../redux/slices/data/cart';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCatalogPathes } from '../../../Catalog/hooks/pathes';
import { getUserDataByID } from '../../../../redux/slices/data/user';

export const CardControls = ({ post, model }: PostModel) => {
  const dispatch = useCustomDispatch();
  const [like, setLike] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pathes, collectionName } = useCatalogPathes();
  const { pathname } = useLocation();

  useEffect(() => {
    const likeFn = async () => {
      const data = await dispatch(getPostLike({ user_id: user?.id!, model_id: post.id! })).unwrap();

      if (data.model_id && data.user_id) setLike(true);
    };
    likeFn();
  }, []);

  const onLike = () => {
    setLike(!like);
    dispatch(setPostLike({ user_id: user?.id!, model_id: post.id!, checked: !like }));
  };

  const onAddCartItem = async () => {
    dispatch(addCartItem(post));
  };

  const onDownload = async () => {
    const data = await dispatch(downloadModel(post)).unwrap();
    console.log(data);
  };

  const onDelete = async () => {
    dispatch(deletePost(post));
  };
  const onOpen = () => {
    const getData = async () => {
      const userData = await dispatch(getUserDataByID(user?.id!)).unwrap();
      dispatch(setAllPostData(post));
      switch (pathname) {
        case pathes.root:
          navigate(`/user/${userData.login}/3d-models/${post.title}`);
          break;
        case `${pathes.collections}/${collectionName}`:
          navigate(`/user/${userData.login}/collections/${collectionName}/${post.title}`);
          break;
        case pathes.models:
          navigate(`/user/${userData.login}/3d-models/${post.title}`);
          break;
        case pathes.likes:
          navigate(`/user/${userData.login}/likes/${post.title}`);
          break;
      }
    };
    getData();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.4vw',
        position: 'absolute',
        left: '15%',
        top: '8%',
      }}>
      <button
        style={{ opacity: 1, background: '#181818', cursor: 'pointer' }}
        onClick={onAddCartItem}>
        <p style={{ opacity: 0.75 }}>to cart</p>
      </button>
      <button
        onClick={onLike}
        style={{ opacity: 1, background: like ? '#c6b63f' : '#181818', cursor: 'pointer' }}>
        <p style={{ opacity: 0.75 }}>{like ? 'liked' : 'like'}</p>
      </button>
      <button onClick={onOpen} style={{ opacity: 1, background: '#181818', cursor: 'pointer' }}>
        <p style={{ opacity: 0.75 }}>open</p>
      </button>
      <button onClick={onDownload} style={{ opacity: 1, background: '#181818', cursor: 'pointer' }}>
        <p style={{ opacity: 0.75 }}>download</p>
      </button>
      <button onClick={onDelete} style={{ opacity: 1, background: '#181818', cursor: 'pointer' }}>
        <p style={{ opacity: 0.75 }}>delete</p>
      </button>
    </div>
  );
};
