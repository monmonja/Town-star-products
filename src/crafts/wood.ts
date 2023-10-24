import Craft from "./craft";
import TreeFarm from "../crops/tree-farm";
import WoodShed from "../buildings/wood-shed";
import LumberYard from "../buildings/lumber-yard";
import { createRequirement } from "../craft-requirement";
import Water from "./water";

export default class Wood extends Craft {
  name = "Wood";

  requires = [
    createRequirement({ craft: Water, quantity: 5, required: false, building: TreeFarm, drawInline: true }),
  ];

  generatedFrom = [
    TreeFarm,
  ];

  storage = [
    WoodShed,
    LumberYard,
  ];
}
