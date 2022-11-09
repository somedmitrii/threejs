import * as THREE from "three";

export const roof = new THREE.Mesh(
  new THREE.ConeBufferGeometry(3.5, 1, 4),
  new THREE.MeshStandardMaterial({ color: "#b35f45" })
);

roof.rotation.y = Math.PI * 0.25;
roof.position.y = 2.5 + 0.5;
