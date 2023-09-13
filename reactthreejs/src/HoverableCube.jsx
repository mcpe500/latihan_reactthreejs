import React, { useState, useRef } from 'react';
import * as THREE from 'three';

const HoverableCube = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cubeRef = useRef();

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  return (
    <mesh
      ref={cubeRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={isHovered ? 0xff0000 : 0x00ff00} />
    </mesh>
  );
};

export default HoverableCube;
