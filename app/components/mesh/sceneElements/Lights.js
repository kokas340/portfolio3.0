import * as THREE from 'three';



export const createLights = () => {
     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
     const directionalLight3 = new THREE.DirectionalLight(0xEDEADE, 0.6);
    directionalLight3.position.set(23, 0, 25);
     const directionalLight4 = new THREE.DirectionalLight(0xEDEADe, 0.6);
    directionalLight4.position.set(5, 10, 5);
     const pointLight = new THREE.PointLight(0x027148, 1, 10);
    pointLight.position.set(5, 5, 0);

    return {ambientLight, directionalLight3, directionalLight4 , pointLight};
}

export const createLightsAbout = () => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight3 = new THREE.DirectionalLight(0xEDEADE, 0.6);
   directionalLight3.position.set(23, 0, 25);
    const directionalLight4 = new THREE.DirectionalLight(0xEDEADe, 0.2);
   directionalLight4.position.set(5, 10, 5);
    const pointLight = new THREE.PointLight(0x027148, 1, 10);
   pointLight.position.set(5, 5, 0);

   return {ambientLight, directionalLight3, directionalLight4 , pointLight};
}