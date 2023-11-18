import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Wood from "./wood";
import GoldPanningSite from "../buildings/gold-panning-site";
import OreStorage from "../buildings/ore-storage";

export default class GoldOre extends Craft {
  name = "Gold Ore";

  requires = [
    createRequirement({ craft: Wood, quantity: 1, drawInline: true }),
  ];

  generatedFrom = [
    GoldPanningSite,
  ];

  storage = [
    OreStorage,
  ];
}
