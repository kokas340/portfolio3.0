
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = ({ loading, onLoadingComplete }) => {
 
  useEffect(() => {
 

    // Scene
    const scene = new THREE.Scene();

    // Sizes
    const sizes = {
      width: window.innerWidth ,
      height: window.innerHeight/1 ,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(18.5, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    // Renderer
    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2)
    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

  // Limit the rotation angles
  controls.minAzimuthAngle = -Math.PI / 4; // Minimum rotation angle in radians (45 degrees)
  controls.maxAzimuthAngle = Math.PI / 4;  // Maximum rotation angle in radians (45 degrees)
  controls.minPolarAngle = 1.5;    // Minimum vertical angle in radians (30 degrees)
  controls.maxPolarAngle = 1.8 ; // Maximum vertical angle in radians (120 degrees)


 // Ambient Light
 const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
 scene.add(ambientLight);

 // Directional Light
 const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
 directionalLight.position.set(5, 10, 5);
 scene.add(directionalLight);

 const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.2);
 directionalLight.position.set(10, -10, 15);
 scene.add(directionalLight3);

// Rotate the light to point towards the left side
const directionalLight2 = new THREE.DirectionalLight(0xBA55D3, 1);
directionalLight2.position.set(100, 150, 620); // Adjusted the position to the right side
directionalLight2.target.position.set(-1000, 0, 0); // Set the target position to the left side
scene.add(directionalLight2);
scene.add(directionalLight2.target); // 
 // Point Light
 const pointLight = new THREE.PointLight(0xffffff, 1, 10);
 pointLight.position.set(-5, 5, 0);
 scene.add(pointLight);

    // Load glTF model
    const loader = new GLTFLoader();
    loader.load('/pcjack.glb', (gltf) => {
      const model = gltf.scene;
      model.rotation.y = -Math.PI / 2;
      model.position.y = -3.5;
      model.scale.set(0, 0, 0); // Set initial scale to 0
      scene.add(model);
      onLoadingComplete(); 
      // PopUp animation
      gsap.to(model.scale, { x: 1, y: 1, z: 1, duration: 0.5, delay: 0 });
      
    });


    // Resize
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth / 2;
      sizes.height = window.innerHeight / 2;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    // Animation Loop
    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };
    loop();

        
        
        
  }, []);

  // Return null as the Three.js scene is rendered directly onto the DOM element added by useEffect
  return null;
};

export default ThreeScene;