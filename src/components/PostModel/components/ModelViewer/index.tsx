import { FC, Suspense, useCallback } from "react";
import { Canvas } from '@react-three/fiber'
import {Environment, OrbitControls} from '@react-three/drei'
import { Styles } from "./style";
import { SVGComponent } from "../../../../interfaces/SVGComponent";
import { ModelLoader } from "../ModelLoader";

export const ModelViewer: FC<SVGComponent> = ({style}) => {

  return ( 
    <Styles.ModelViewer>
        <Canvas camera={{position: [100,0,100]}}>
          <Suspense >
            <ModelLoader />
            <OrbitControls />
            <Environment preset='forest' background />
          </Suspense>
        </Canvas>
    </Styles.ModelViewer>
   );
}
 
