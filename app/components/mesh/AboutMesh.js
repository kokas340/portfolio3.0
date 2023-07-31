
"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createCamera } from './sceneElements/Camera';
import {loaderMesh} from './sceneElements/LoaderMesh';
import { createLights } from './sceneElements/Lights';

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
    const { camera, controls } = createCamera(sizes,canvas,17,0,0,20,-0.1,0.1,1,1.6);
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

    //here look
    const loadModel = async () => {
      try {
        await loaderMesh(scene, "pcjack1", -Math.PI / 2, -3,false);
        onLoadingComplete();
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();

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
