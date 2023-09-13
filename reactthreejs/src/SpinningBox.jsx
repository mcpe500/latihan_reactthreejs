import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

const SpinningBox = () => {
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        // Set up the scene
        const scene = new THREE.Scene();

        // Set up the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Set up the renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('spinning-box-container').appendChild(renderer.domElement);

        // Create a box geometry
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: (isHovered ? 303030 : 0x00ff00) });
        console.log(isHovered)
        const box = new THREE.Mesh(geometry, material);
        box.onPointerOver = () => {
            setIsHovered(true)
        }
        box.onPointerOut = () => {
            setIsHovered(false)
        }
        scene.add(box);

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the box
            box.rotation.x += 0.01;
            box.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return (
        <div id="spinning-box-container" ></div>
    );
};

export default SpinningBox;
