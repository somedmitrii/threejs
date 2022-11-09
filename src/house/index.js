import * as THREE from "three";

import { door } from "./door";
import { walls } from "./walls";
import { roof } from "./roof";

export const house = new THREE.Group();

house.add(walls);
house.add(roof);
house.add(door);
