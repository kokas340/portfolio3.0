
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Desktop2 = () => {

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Sizes
    const sizes = {
      width: window.innerWidth/1.6 ,
      height: window.innerHeight ,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(17, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    // Renderer
    const canvas = document.querySelector('.webgl2');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

        // Limit the rotation angles
        controls.minAzimuthAngle = -0.1; // Minimum rotation angle in radians (45 degrees)
        controls.maxAzimuthAngle = 0.1;  // Maximum rotation angle in radians (45 degrees)
        controls.minPolarAngle = 1.0;    // Minimum vertical angle in radians (30 degrees)
        controls.maxPolarAngle = 1.6; // Maximum vertical angle in radians (120 degrees)
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight3.position.set(23, 0, 25);
    scene.add(directionalLight3);
   
    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight4.position.set( 5, 10, 5);
    scene.add(directionalLight4);
    // Point Light
    const pointLight = new THREE.PointLight(0x027148, 1, 10);
    pointLight.position.set(5, 5, 0);
    scene.add(pointLight);

    // Load glTF model
    const loader = new GLTFLoader();
    loader.load('/pcjack2.glb', (gltf) => {
      const model = gltf.scene;
      model.rotation.y = -Math.PI / 2;
      model.position.y = -3;
      scene.add(model);
      gsap.from(model.position, { y: -10, to: { y: -3 }, duration: 4, ease: 'power2.out' });

      
    });

    // Resize
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth ;
      sizes.height = window.innerHeight ;
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
    //animations
    const tl = gsap.timeline({ defaults: { duration: 2 } });
    tl.fromTo('.introText', { x: '-540%' }, { x: '0%' });
    const tl2 = gsap.timeline({ defaults: { duration: 2.4 } });
    tl2.fromTo('.about', { x: '-540%' }, { x: '0%' });
    const tl3 = gsap.timeline({ defaults: { duration: 2.8 } });
    tl3.fromTo('.education', { x: '-540%' }, { x: '0%' });
    const tl4 = gsap.timeline({ defaults: { duration: 3.2 } });
    tl4.fromTo('.experience', { x: '-540%' }, { x: '0%' });
    const tl5 = gsap.timeline({ defaults: { duration: 3.6 } });
    tl5.fromTo('.projects', { x: '-540%' }, { x: '0%' });

    
  }, []);


  // Return null as the Three.js scene is rendered directly onto the DOM element added by useEffect
  return null;
};

export default Desktop2;