import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import PropTypes from "prop-types";

const words = [
  "React",
  "Three.js",
  "Fiber",
  "JavaScript",
  "TypeScript",
  "3D",
  "WebGL",
  "Animation",
  "Shaders",
  "Performance",
  "Design",
  "User Experience",
  "User Interface",
  "Accessibility",
  "Collaboration",
  "Teamwork",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Time Management",
  "Leadership",
  "Creativity",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Time Management",
  "Leadership",
  "Creativity",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
];

const Word = ({ children, position }) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef();

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.4}
      color={hovered ? "orange" : "white"}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </Text>
  );
};

Word.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.object.isRequired,
};

const WordSphere = () => {
  const groupRef = useRef();

  const radius = 3;
  const wordPositions = words.map((word, i) => {
    const phi = Math.acos(-1 + (2 * i) / words.length);
    const theta = Math.sqrt(words.length * Math.PI) * phi;
    const position = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
    return { position, word };
  });

  return (
    <group ref={groupRef}>
      {wordPositions.map(({ word, position }, index) => (
        <Word key={index} position={position}>
          {word}
        </Word>
      ))}
    </group>
  );
};

const SkillsSphere = () => {
  return (
    <div className="bg-yellow-300">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <ambientLight intensity={0.5} />
        <WordSphere />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default SkillsSphere;
