import { Card_1 } from '../Common/Cards/1';
import { PostModel } from '../../redux/slices/data/post';

export const CardRender = ({ data }: { data: PostModel[] }) => {
  return (
    <>
      {data?.map((obj) => (
        <Card_1 key={obj.post.id} post={obj.post} model={obj.model} style={{ height: '12vw' }} />
      ))}
    </>
  );
};
