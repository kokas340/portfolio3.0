import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const createCamera = (sizes, canvas) => {
  const camera = new THREE.PerspectiveCamera(17, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 20;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;

  // Limit the rotation angles
  controls.minAzimuthAngle = -0.1; // Minimum rotation angle in radians (45 degrees)
  controls.maxAzimuthAngle = 0.1;  // Maximum rotation angle in radians (45 degrees)
  controls.minPolarAngle = 1.0;    // Minimum vertical angle in radians (30 degrees)
  controls.maxPolarAngle = 1.6;    // Maximum vertical angle in radians (120 degrees)

  return { camera, controls };

};
 
export const createCameraIntro = (sizes, canvas) => {
  const camera = new THREE.PerspectiveCamera(17, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

        // Limit the rotation angles
        controls.minAzimuthAngle = -0.1; // Minimum rotation angle in radians (45 degrees)
        controls.maxAzimuthAngle = 0.1;  // Maximum rotation angle in radians (45 degrees)
        controls.minPolarAngle = 1.0;    // Minimum vertical angle in radians (30 degrees)
        controls.maxPolarAngle = 1.6; // Maximum vertical angle in radians (120 degrees)

  return { camera, controls };

};

