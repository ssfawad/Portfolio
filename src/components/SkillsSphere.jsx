import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import PropTypes from "prop-types";
import { skills } from "../constants/data";

const AnimatedText = animated(Text); // Make Text component animatable

const Word = ({ children, position }) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef();

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  const { color, scale } = useSpring({
    color: hovered ? "#fc0865" : "white",
    scale: hovered ? 1.1 : 1, // Slight scaling effect on hover
    config: { tension: 200, friction: 20 }, // Smooth transition settings
  });

  return (
    <AnimatedText
      ref={textRef}
      position={position}
      fontSize={0.5}
      color={color}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </AnimatedText>
  );
};

Word.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.object.isRequired,
};

const WordSphere = () => {
  const radius = 5;
  const wordPositions = skills.map((skill, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    const position = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
    return { position, skill };
  });

  return (
    <group>
      {wordPositions.map(({ skill, position }, index) => (
        <Word key={index} position={position}>
          {skill}
        </Word>
      ))}
    </group>
  );
};

export default WordSphere;
