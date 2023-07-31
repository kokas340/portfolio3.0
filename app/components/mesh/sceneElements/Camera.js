import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const createCamera = (sizes, canvas,prespec,x,y,z,mx,px,my,py) => {
  const camera = new THREE.PerspectiveCamera(prespec, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = x;
  camera.position.y = y;
  camera.position.z = z;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;

  // Limit the rotation angles
  controls.minAzimuthAngle = mx; // Minimum rotation angle in radians (45 degrees)
  controls.maxAzimuthAngle = px;  // Maximum rotation angle in radians (45 degrees)
  controls.minPolarAngle = my;    // Minimum vertical angle in radians (30 degrees)
  controls.maxPolarAngle = py;    // Maximum vertical angle in radians (120 degrees)

  return { camera, controls };

};
 
export const createCameraIntro = (sizes, canvas) => {
  const camera = new THREE.PerspectiveCamera(17, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 0;
  camera.position.x=20;
  camera.position.y=0;
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



