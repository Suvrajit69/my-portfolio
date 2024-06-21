import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

interface ComputerProps {
  isMobile: boolean;
}

const Computer = ({ isMobile }: ComputerProps) => {
  console.log(isMobile);

  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 1.5}
        position={isMobile ? [0, -1, -1.6] : [0, -3, -1.6]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    //Add a listner for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    //set the initial value of is mobile
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes of mediaQuery
    const handleMediaQueryChange = (e:any) => {
      setIsMobile(e.matches);
    };
    //Add the callback function as a listner for chages to the mediaquery
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    //Remove the listner when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
