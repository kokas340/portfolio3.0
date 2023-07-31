"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createCameraIntro } from './sceneElements/Camera';
import {  createLightsAbout } from './sceneElements/Lights';
import { runAnimationsIntro } from './sceneElements/meshAnimations';
import {loaderMesh} from './sceneElements/LoaderMesh';
const IntroMesh = () => {

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

    //Lights
    const {ambientLight ,directionalLight3,directionalLight4,pointLight} = createLightsAbout();
    scene.add(ambientLight);
    scene.add(directionalLight3);
    scene.add(directionalLight4);
    scene.add(pointLight);


 //here look
 const loadModel = () => {
  try {
    loaderMesh(scene, "pcjack2", -Math.PI / 2, -3,false);
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
    
    runAnimationsIntro();

    
  }, []);


  return null;
};

export default IntroMesh;