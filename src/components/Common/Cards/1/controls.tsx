import { useEffect, useState } from 'react';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { getPostLike, setPostLike } from '../../../../redux/slices/data/post';
import { Tables } from '../../../../interfaces/DatabaseGeneratedTypes';
import { useAuth } from '../../../../providers/authProvider';
import { addCartItem } from '../../../../redux/slices/data/cart';

type Props = {
  post: Tables<'models'>;
};
export const CardControls = ({ post }: Props) => {
  const dispatch = useCustomDispatch();
  const [like, setLike] = useState(false);
  const { user } = useAuth();

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
      <button style={{ opacity: 1, background: '#181818', cursor: 'pointer' }}>
        <p style={{ opacity: 0.75 }}>edit</p>
      </button>
      <button style={{ opacity: 1, background: '#181818', cursor: 'pointer' }}>
        <p style={{ opacity: 0.75 }}>download</p>
      </button>
    </div>
  );
};
