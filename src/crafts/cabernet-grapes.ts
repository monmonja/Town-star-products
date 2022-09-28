import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Wood from "./wood";
import Water from "./water";
import Silo from "../buildings/silo";
import CabernetVines from "../crops/cabernet-vines";

export default class CabernetGrapes extends Craft {
  name = "Cabernet Grapes";

  requires = [
    createRequirement({ craft: Water, quantity: 2 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  generatedFrom = [
    CabernetVines,
  ];

  storage = [
    Silo,
  ];
}