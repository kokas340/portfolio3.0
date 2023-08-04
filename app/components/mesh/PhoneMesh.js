"use client"
import  { useEffect } from 'react';
import * as THREE from 'three';
import { createCamera } from './sceneElements/Camera';
import {  createLights } from './sceneElements/Lights';
import {loaderMesh} from './sceneElements/LoaderMesh';

const PhoneMesh = (props) => {
  
  useEffect(() => {
   
  
    const scene = new THREE.Scene();
    //Canvas
    const canvas = document.querySelector('.' + props.canvas);
    // Sizes
    const sizes = {
      width: window.innerWidth ,
      height: window.innerHeight/1.5 ,
    };

   // Camera && Controls
   const { camera, controls } = createCamera(sizes,canvas,8,0,0,20,-0.1,0.1,1,1.6);
   scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0x000000, 0);//make bg transparent
    renderer.setSize(sizes.width, sizes.height);

    //Lights
    const {ambientLight ,directionalLight3,pointLight} = createLights();
    scene.add(ambientLight);
    scene.add(directionalLight3);
    
    scene.add(pointLight);

    
    loaderMesh(scene, props.mesh, -1.2, 0, false,-2,1)
    .then(() => {
      // Render the scene after the model is loaded
      renderer.render(scene, camera);
    })
    .catch((error) => {
      console.error('Error loading model:', error);
    });

    // Resize
    window.addEventListener('resize', () => {
      if (sizes.width < 768) {
        sizes.width = window.innerWidth ;
        sizes.height = window.innerHeight/1.5 ;
        const model = scene.getObjectByName(props.mesh);
        if (model) {
          model.position.x = 1; // Adjust this value to move the model to the right along the x-axis
        }
      }else{
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight/1.5;
      }
    
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

export default PhoneMesh;
