
"use client"
"use client"
import  { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { createCamera } from './sceneElements/Camera';
//components
import { createLights } from './sceneElements/Lights';

const EpccMesh = () => {
  
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    //Canvas
    const canvas = document.querySelector('.webgl3');
    // Sizes
    const sizes = {
      width: window.innerWidth/6 ,
      height: window.innerHeight/4 ,
    };

   // Camera && Controls
    const { camera, controls } = createCamera(sizes,canvas,4.3,0,0,30);
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
    loader.load('/epcc.glb', (gltf) => {
      const model = gltf.scene;
      model.rotation.y = -Math.PI / 2;
      model.position.y =1;
      scene.add(model);
      
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

export default EpccMesh;
