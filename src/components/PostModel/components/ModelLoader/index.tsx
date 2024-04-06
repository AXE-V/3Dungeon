import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const ModelLoader = () => {
  const gltf = useLoader(GLTFLoader, "/public/models/gltf/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={.5} />
    </>
  );
};