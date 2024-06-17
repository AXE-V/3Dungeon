//@ts-nocheck
import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, OrbitControlsProps } from '@react-three/drei';
import { Styles as S } from './style';
import { SVGComponent } from '../../../../interfaces/SVGComponent';
import { Loading } from '../../../Common/Model/Loading';
import { modelImporter } from './modelImporter';
import { PostModel } from '../../../../redux/slices/data/post';

type Props = {
  orbitControlsProps?: OrbitControlsProps;
  post: Pick<PostModel['post'], 'zip_name' | 'user_id'>;
};

export const ModelViewer: FC<SVGComponent & Props> = ({ style, post, orbitControlsProps }) => {
  const Model = modelImporter(post);

  return (
    <>
      <S.ModelViewer style={{ ...style }}>
        <Canvas camera={{ position: [70, 30, 70] }}>
          <Suspense fallback={<Loading />}>
            {/* <directionalLight position={[0, -2, 0]} />
          <directionalLight position={[0, 2, 0]} />
          <directionalLight position={[0, 0, 1]} intensity={0.8} />
          <directionalLight position={[0, 0, -1]} intensity={0.8} />
          <ambientLight args={['white', 0.4]} /> */}
            {Model}
            <OrbitControls {...orbitControlsProps} />
            <Environment files={'/rosendal_mountain_midmorning_2k.hdr'} background />
          </Suspense>
        </Canvas>
      </S.ModelViewer>
    </>
  );
};
