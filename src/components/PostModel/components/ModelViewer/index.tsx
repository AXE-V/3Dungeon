import { FC, ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, GroupProps } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Styles } from './style';
import { SVGComponent } from '../../../../interfaces/SVGComponent';

export const ModelViewer: FC<SVGComponent> = ({ style }) => {
  const [Model, setModel] = useState<{ (props: GroupProps): JSX.Element }>();

  useEffect(() => {
    const pathModel = '/model.tsx';
    import(pathModel).then((d) => {
      const modelProps: GroupProps = { scale: 30 };
      setModel(() => d.Model(modelProps));
    });
  }, []);

  return (
    <Styles.ModelViewer style={style}>
      <Canvas camera={{ position: [100, 0, 100] }}>
        <Suspense>
          {/* <directionalLight position={[0, -2, 0]} />
          <directionalLight position={[0, 2, 0]} />
          <directionalLight position={[0, 0, 1]} intensity={0.8} />
          <directionalLight position={[0, 0, -1]} intensity={0.8} />
          <ambientLight args={['white', 0.4]} /> */}

          <OrbitControls />
          {Model}

          <Environment files={'/rosendal_mountain_midmorning_2k.hdr'} background />
        </Suspense>
      </Canvas>
    </Styles.ModelViewer>
  );
};
