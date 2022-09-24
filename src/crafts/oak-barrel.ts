import Craft from "./craft";
import LumberMill from "../buildings/lumber-mill";
import { createRequirement } from "../craft-requirement";
import OakWood from "./oak-wood";
import Iron from "./iron";
import Energy from "./energy";
import Warehouse from "../buildings/warehouse";

export default class OakBarrel extends Craft {
  name = "Oak Barrel";

  requires = [
    createRequirement({ craft: OakWood, quantity: 3 }),
    createRequirement({ craft: Iron, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 1 }),
  ];

  generatedFrom = [
    LumberMill,
  ];

  storage = [
    Warehouse,
  ];
}