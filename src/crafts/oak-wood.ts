import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import OakTreeFarm from "../crops/oak-tree-farm";
import Silo from "../buildings/silo";

export default class OakWood extends Craft {
  name = "Oak Wood";

  requires = [
    createRequirement({ craft: Water, quantity: 5 }),
  ];

  generatedFrom = [
    OakTreeFarm,
  ];

  storage = [
    Silo,
  ];
}