
"use client"
"use client"
import  { useEffect } from 'react';
import * as THREE from 'three';
import { createCamera } from './sceneElements/Camera';
import {  createLights } from './sceneElements/Lights';
import {loaderMesh} from './sceneElements/LoaderMesh';


const PhotoMesh = (props) => {
  
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    //Canvas
    const canvas = document.querySelector('.' + props.canvas);
    const container = canvas.parentElement;

    // Set canvas size to match the container size
    const containerRect = container.getBoundingClientRect();
    canvas.width = containerRect.width;
    canvas.height = Math.max(containerRect.height*200, 700);

    // Sizes
    const tacticalWinds2xl = 1536; // Custom 2xl breakpoint

    const sizes = {
      width: window.innerWidth >= tacticalWinds2xl ? window.innerWidth / 2 : window.innerWidth,
      height: window.innerHeight / 2.3,
    };

   // Camera && Controls
    const { camera, controls } = createCamera(sizes,canvas,9.8,0,20,0,0.1,3,1.5,1.5);
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x00000, 0);//make bg transparent
    renderer.setSize(sizes.width, sizes.height);

    //Lights
    const {ambientLight ,directionalLight3,directionalLight4,pointLight} = createLights();
    scene.add(ambientLight);
    scene.add(directionalLight3);
    
    scene.add(pointLight);

    
    loaderMesh(scene, props.mesh, -1.2, 0, false,0,0)
    .then(() => {
      // Render the scene after the model is loaded
      renderer.render(scene, camera);
    })
    .catch((error) => {
      console.error('Error loading model:', error);
    });

    // Resize
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth >= tacticalWinds2xl ? window.innerWidth / 2 : window.innerWidth;

      sizes.height = window.innerHeight / 2.3;
 
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

export default PhotoMesh;
