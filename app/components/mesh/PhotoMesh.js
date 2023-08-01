
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
    const sizes = {
      width: window.innerWidth /2.5,
      height: window.innerHeight/2.4 ,
    };

   // Camera && Controls
    const { camera, controls } = createCamera(sizes,canvas,9.8,0,20,0,0.1,3,1.5,1.5);
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);//make bg transparent
    renderer.setSize(sizes.width, sizes.height);

    //Lights
    const {ambientLight ,directionalLight3,directionalLight4,pointLight} = createLights();
    scene.add(ambientLight);
    scene.add(directionalLight3);
    
    scene.add(pointLight);

    
    loaderMesh(scene, props.mesh, -1.2, 0, false)
    .then(() => {
      // Render the scene after the model is loaded
      renderer.render(scene, camera);
    })
    .catch((error) => {
      console.error('Error loading model:', error);
    });

    // Resize
    window.addEventListener('resize', () => {
      const newContainerRect = container.getBoundingClientRect();
      sizes.width = newContainerRect.width;
      sizes.height = Math.max(newContainerRect.height, 300);

      // Update camera aspect ratio
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer size
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
