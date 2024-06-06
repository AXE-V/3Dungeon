// import { useLoader, useThree, Vector3, Box3HelperProps } from '@react-three/fiber';
// import { useSelector } from 'react-redux';
// import { FBXLoader, GLTF, GLTFLoader, OBJLoader } from 'three/examples/jsm/Addons.js';
// import { FC, useEffect, useMemo, useState } from 'react';
// import { Basics, SVGComponent } from '../../../../interfaces/SVGComponent';
// import { useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
// import { modelMeta } from '../../utils/modelMeta';
// import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
// import {
//   postSelectorFormat,
//   postSelectorScene,
//   setPostFormat,
//   setPostGeometry,
// } from '../../../../redux/slices/data/post';

// export const Model: FC<SVGComponent> = () => {
//   const postSliceScene = useSelector(postSelectorScene);
//   const postSliceFormat = useSelector(postSelectorFormat);
//   const gltf = useLoader(GLTFLoader, postSliceScene);
//   const dispatch = useCustomDispatch();
//   const meta = useMemo(() => modelMeta(gltf), []);

//   useEffect(() => {
//     dispatch(setPostFormat(postSliceFormat));
//     dispatch(setPostGeometry(meta));
//   }, []);

//   return <>{postSliceScene && <primitive object={gltf.scene} scale={0.5} />}</>;
// };
