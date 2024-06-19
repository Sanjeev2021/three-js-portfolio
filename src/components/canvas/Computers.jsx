"use client";
import { Suspense , useState , useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF ,SpotLight} from "@react-three/drei";


import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  // Loading the 3D model
  const { scene } = useGLTF('/desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <SpotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive 
        object={scene}
        scale={isMobile ? 0.7: 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, 0.1]}
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile , setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Set the initial value
    setIsMobile(mediaQuery.matches);
    // Define the event handler
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Attach the event listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []); 



  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile = "true"/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
