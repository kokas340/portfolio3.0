
"use client"
"use client"
import  { useEffect } from 'react';
import * as THREE from 'three';
import { createCamera } from './sceneElements/Camera';
import {  createLights } from './sceneElements/Lights';
import {loaderMesh} from './sceneElements/LoaderMesh';


const ProjectMesh = (props) => {
  
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    //Canvas
    const canvas = document.querySelector('.'+props.canvas);
    // Sizes
    const sizes = {
      width: window.innerWidth/3 ,
      height: window.innerHeight/3 ,
    };

   // Camera && Controls
    const { camera, controls } = createCamera(sizes,canvas,6.3,0,20,0,0.1,1,1.5,1.55);
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

    
    const loadModel = () => {
      try {
        loaderMesh(scene, props.mesh, -1.2,0 ,false);
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

export default ProjectMesh;
