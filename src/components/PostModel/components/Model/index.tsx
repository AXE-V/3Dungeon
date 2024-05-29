import { useLoader, useThree, Vector3, Box3HelperProps } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import { FBXLoader, GLTF, GLTFLoader, OBJLoader } from 'three/examples/jsm/Addons.js';
import { FC, useEffect, useMemo, useState } from 'react';
import { Basics, SVGComponent } from '../../../../interfaces/SVGComponent';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { modelMeta } from '../../utils/modelMeta';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { setPostFormat, setPostGeometry } from '../../../../redux/slices/data/post';

type UploadResponse = {
  success: boolean;
  message: string;
  scene: {
    path: string;
    format: string;
  };
};

export const Model: FC<SVGComponent> = () => {
  function getScene(): UploadResponse {
    const scene = localStorage.getItem('scene');
    return scene ? JSON.parse(scene) : null;
  }

  const sceneLS = getScene();
  const gltf = useLoader(GLTFLoader, sceneLS.scene.path!);
  const dispatch = useCustomDispatch();
  const meta = useMemo(() => modelMeta(gltf), []);

  useEffect(() => {
    dispatch(setPostFormat(sceneLS.scene.format));
    dispatch(setPostGeometry(meta));
  }, []);

  return <>{sceneLS && <primitive object={gltf.scene} scale={0.5} />}</>;
};
