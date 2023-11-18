import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import CopperPanningSite from "../buildings/copper-panning-site";
import OreStorage from "../buildings/ore-storage";
import Water from "./water";

export default class CopperOre extends Craft {
  name = "Copper Ore";

  requires = [
    createRequirement({ craft: Water, quantity: 1, drawInline: true }),
  ];

  generatedFrom = [
    CopperPanningSite,
  ];

  storage = [
    OreStorage,
  ];
}
