import React, {useState,useEffect, Suspense, useRef} from 'react';
import { Canvas } from 'react-three-fiber';
import { useGLTF, Html, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



function Lens() {
  function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/demo-img.glb')
    return (
      <group ref={group} {...props} dispose={null} scale={4}>
        <mesh geometry={nodes.Suzanne.geometry} material={materials['Material.001']} scale={4.64} />
      </group>
    )
  }

  return (
    <div className="lens">
        <Canvas camera={{position:[0,0,65], fov:70}}>
          <Suspense fallback={null}>
             <ambientLight />
             <Model />
             <OrbitControls enablePan={true} />
          </Suspense>
        </Canvas>
    </div>
  )
}

export default Lens