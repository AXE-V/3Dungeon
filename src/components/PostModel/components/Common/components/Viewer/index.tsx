import { FC, Suspense } from "react";
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import {Environment, OrbitControls} from '@react-three/drei'
import { Styles } from "../../../style";
import { SVGComponent } from "../../../../../../interfaces/SVGComponent";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/public/models/gltf/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={.5} />
    </>
  );
};

export const ModelViewer: FC<SVGComponent> = ({style}) => {
  return ( 
    <Styles.ModelViewer>
        <Canvas camera={{position: [100,0,100]}}>
          <Suspense >
            <Model />
            <OrbitControls />
            <Environment preset='forest' background />
          </Suspense>
        </Canvas>
    </Styles.ModelViewer>
   );
}
 
