import * as THREE from "three";

import { door } from "./door";
import { walls } from "./walls";
import { roof } from "./roof";
import { bush1, bush2, bush3, bush4 } from "../bushes";

export const house = new THREE.Group();

house.add(walls);
house.add(roof);
house.add(door);
house.add(bush1, bush2, bush3, bush4);
