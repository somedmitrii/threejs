import * as THREE from "three";

export const door = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(2, 2),
  new THREE.MeshStandardMaterial({ color: "#aa7b7b" })
);
door.position.y = 1;
door.position.z = 2 + 0.01;
