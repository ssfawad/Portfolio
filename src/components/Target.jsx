import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react';


const Target = (props) => {
    const targetRef = useRef();
    const {scene} = useGLTF('link to the model')
  return (
    <mesh {...props} ref={targetRef}>
        <primitive object={scene}></primitive>
    </mesh>
  )
}

export default Target