import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';


export const loaderMesh = (scene, modelName, rotationY, positionY,animation, positionX,positionZ) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(`/${modelName}.glb`, (gltf) => {
      const model = gltf.scene;
      model.rotation.y = rotationY;
      model.position.y = positionY;
      model.position.x=positionX;
      model.position.z=positionZ;
      scene.add(model);
      if(animation){
        gsap.from(model.position, { y: -10, to: { y: -3 }, duration: 4, ease: 'power2.out' });   
      }
      resolve(); // Resolve the Promise when loading is complete
    }, undefined, reject);
  });
};
