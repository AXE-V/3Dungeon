import { ObjectMap, useThree } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/Addons.js';
import THREE, { BufferAttribute, Mesh, NormalBufferAttributes } from 'three';

export const modelMeta = (model: GLTF & ObjectMap) => {
  try {
    let polygons = 0;
    let vertices = 0;
    let edges = 0;

    model.scene.traverse((object) => {
      const obj = <Mesh>object;
      if (obj.isMesh) {
        const { geometry } = obj;
        polygons += geometry.index?.array.length! / 3;
        vertices += geometry.attributes.position.array.length / 3;
        // ребра
        edges += (geometry.index?.array.length! / 3) * 2;
      }
    });

    return {
      polygons,
      vertices,
      edges,
    };
  } catch (error) {
    console.log(error);
  }
};
