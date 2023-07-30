
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Desktop2 = () => {

  useEffect(() => {


    // Scene
    const scene2 = new THREE.Scene();

    // Sizes
    const sizes = {
      width: window.innerWidth / 2,
      height: window.innerHeight / 1,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(12.7, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 40;
    camera.position.x = 60;
    scene2.add(camera);

    // Renderer
    const canvas = document.querySelector('.webgl2');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Limit the rotation angles
    controls.minAzimuthAngle = -0.6; // Minimum rotation angle in radians (45 degrees)
    controls.maxAzimuthAngle = 0.6;  // Maximum rotation angle in radians (45 degrees)
    controls.minPolarAngle = 1.5;    // Minimum vertical angle in radians (30 degrees)
    controls.maxPolarAngle = 1.64; // Maximum vertical angle in radians (120 degrees)

    //LIGHTS
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene2.add(ambientLight);
    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(5, 10, 5);
    scene2.add(directionalLight);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(10, -10, 15);
    scene2.add(directionalLight3);

    // Rotate the light to point towards the left side
    const directionalLight2 = new THREE.DirectionalLight(0x027148, 1);
    directionalLight2.position.set(100, 150, 620); // Adjusted the position to the right side
    directionalLight2.target.position.set(-1000, 0, 0); // Set the target position to the left side
    scene2.add(directionalLight2);
    scene2.add(directionalLight2.target); // 
    // Point Light
    const pointLight = new THREE.PointLight(0x027148, 1, 10);
    pointLight.position.set(-5, 5, 0);
    scene2.add(pointLight);

    // Load glTF model
    const loader = new GLTFLoader();
    loader.load('/pcjack2.glb', (gltf) => {
      const model = gltf.scene;
      model.rotation.y = -Math.PI / 2;
      model.position.y = 0;
      model.position.x = -0.8;
      model.scale.set(0, 0, 0); // Set initial scale to 0
      scene2.add(model);
      // PopUp animation
      gsap.to(model.scale, { x: 1, y: 1, z: 1, duration: 0.4, delay: 0 });
    });

    // Resize
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    // Animation Loop
    const loop = () => {
    
      renderer.render(scene2, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

  }, []);

  // Return null as the Three.js scene is rendered directly onto the DOM element added by useEffect
  return null;
};

export default Desktop2;