import { GroupProps } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { path } from '../../../../utils/path';
import { PostModel } from '../../../../redux/slices/data/post';

type ModelImporter = Pick<PostModel['post'], 'zip_name' | 'user_id'>;
export const modelImporter = (post: ModelImporter) => {
  const [Model, setModel] = useState<{ (props: GroupProps): JSX.Element } | null>(null);
  const { getName } = path;

  useEffect(() => {
    try {
      const pathModel = `/public/models/data/${post.user_id}/${getName(post.zip_name)}/scene.tsx`;
      import(`${pathModel}`)
        .then((d) => {
          const modelProps: GroupProps = { scale: 30 };
          setModel(() => d.Model(modelProps));
        })
        .catch((er) => console.log(er));
      console.log('imported model was loaded');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return Model;
};
