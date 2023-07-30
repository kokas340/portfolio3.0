
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createCameraIntro } from '../sceneElements/Camera';
import { createLights, createLightsAbout } from '../sceneElements/Lights';
const Desktop2 = () => {

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    //Canvas
    const canvas = document.querySelector('.webgl2');
    // Sizes
    const sizes = {
      width: window.innerWidth/1.6 ,
      height: window.innerHeight ,
    };

    // Camera && Controls
    const { camera, controls } = createCameraIntro(sizes,canvas);
    scene.add(camera);


    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);//rm bg 
    renderer.setSize(sizes.width, sizes.height);


    const {ambientLight ,directionalLight3,directionalLight4,pointLight} = createLightsAbout();
    scene.add(ambientLight);
    scene.add(directionalLight3);
    scene.add(directionalLight4);
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