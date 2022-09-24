import Craft from "./craft";

import LumberMill from "../buildings/lumber-mill";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Wood from "./wood";
import WaterDrum from "./water-drum";
import WoodShed from "../buildings/wood-shed";
import LumberYard from "../buildings/lumber-yard";

export default class Lumber extends Craft {
  name = "Lumber";

  requires = [
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 2 }),
    createRequirement({ craft: WaterDrum, quantity: 1 }),
  ];

  generatedFrom = [
    LumberMill,
  ];

  storage = [
    WoodShed,
    LumberYard,
  ];
}