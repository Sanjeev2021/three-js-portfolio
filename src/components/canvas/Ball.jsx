import React , {Suspense} from 'react';
import {Canvas} from '@react-three/fiber'
import {Decal , Float , OrbitControls , Preload , useTexture } from '@react-three/drei'



import CanvasLoader from '../Loader';

const Ball = (props) => {
  console.log('imgUrl:', props.imgUrl.src);
  
  const decal = useTexture(props.imgUrl.src);
  console.log("decal",decal)


  return (
    <Float speed ={1.75} rotationIntensity = {1} floatIntensity = {2}>
      <ambientLight intensity = {0.25} />
      <directionalLight position = {[0, 0, 0.05]}/>
      <mesh castShadow recieveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
            color="#fff8eb"
            polygonOffsetFactor = {-5}
            flatShading
        />
        <Decal 
          position={[0,0,1]}
          rotation = {[2 * Math.PI , 0 , 6.25]}
          flatShading
          map = {decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl = {icon }/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas