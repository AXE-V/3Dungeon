/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 ./public/models/uploads/scene.gltf -T -t -o ./public/models/data/20250b4a-bb69-4cce-ae6a-29fe0167c429/recon_helmet/scene.tsx -r ./public 
Files: ./public/models/uploads/scene.gltf [6.42KB] > C:\Users\Константин\Documents\page\JavaScript\React\My\vite-3d-store\public\models\data\20250b4a-bb69-4cce-ae6a-29fe0167c429\recon_helmet\scene-transformed.glb [605.6KB] (-9333%)
Author: McCarthy3D (https://sketchfab.com/joshuawatt811)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/recon-helmet-7de7e0104b2249ed98bb437f760dffec
Title: Recon Helmet
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    Spartan_Black_Shader: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/data/20250b4a-bb69-4cce-ae6a-29fe0167c429/recon_helmet/scene-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Spartan_Black_Shader} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
    </group>
  )
}

useGLTF.preload('/models/data/20250b4a-bb69-4cce-ae6a-29fe0167c429/recon_helmet/scene-transformed.glb')