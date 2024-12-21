import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/data";
import Target from "../components/Target";

const Hero = () => {
  const controls = useControls("Room", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      positionZ: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      rotationX: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      rotationY: {
          value: 2.5,
          min: -10,
          max: 10,
        },
        rotationZ: {
          value: 2.5,
          min: -10,
          max: 10,
        },
        scale: {
            value: 2.5,
            min: -10,
            max: 10,
          },
  });

  const isSmall = useMediaQuery({maxWidth: 440})
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
  
  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
            Hi, I am Anzhelika <span>🍔</span>
          </p>
          <p className="hero_tag text-gray_gradient">Frontend Developer</p>
        </div>
        <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <Room
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
/*                 position={[controls.positionX, controls.positionY, controls.positionZ]}
                rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                scale={[controls.scale, controls.scale,
                    controls.scale
                ]} */
              />

              <group>
                {/* <Target position={sizes.targetPosition}/> */}
              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Hero;
