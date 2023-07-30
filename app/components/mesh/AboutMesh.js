
"use client"
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createCamera } from '../sceneElements/Camera';
//components
import { createLights } from '../sceneElements/Lights';

const AboutMesh = ({ onLoadingComplete }) => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    //Canvas
    const canvas = document.querySelector('.webgl');
    // Sizes
    const sizes = {
      width: window.innerWidth ,
      height: window.innerHeight ,
    };

   // Camera && Controls
    const { camera, controls } = createCamera(sizes,canvas);
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);//make bg transparent
    renderer.setSize(sizes.width, sizes.height);

    //Lights
    const {ambientLight ,directionalLight3,directionalLight4,pointLight} = createLights();
    scene.add(ambientLight);
    scene.add(directionalLight3);
    scene.add(directionalLight4);
    scene.add(pointLight);

    // Load glTF model
    const loader = new GLTFLoader();
    loader.load('/pcjack1.glb', (gltf) => {
      const model = gltf.scene;
      model.rotation.y = -Math.PI / 2;
      model.position.y = -3;
      scene.add(model);
      onLoadingComplete();
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
   
  }, []);
  return null;
};

export default AboutMesh;
