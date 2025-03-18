import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import PropTypes from "prop-types";

const words = [
  "ReactJS",
  "Three.js",
  "JavaScript",
  "TypeScript",
  "C#",
  "Unity",
  "Python",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "Git",
  "MongoDB",
  "Azure",
  "Atlassian suite",
  "MySQL",
  "Scrum",
  "Agile",
  "3D",
  "GitHub",
  "Web",
  "React Three Fiber",
  "Rapier",
  "Drei",
  "Redux",
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
      fontSize={0.5}
      color={hovered ? "#fc0865" : "white"}
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

  const radius = 5;
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
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      style={{ width: "100%", height: "80vh" }}
    >
      <ambientLight intensity={0.5} />
      <WordSphere />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};

export default SkillsSphere;
