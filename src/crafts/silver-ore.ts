import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import SilverPanningSite from "../buildings/silver-panning-site";
import OreStorage from "../buildings/ore-storage";

export default class SilverOre extends Craft {
  name = "Silver Ore";

  requires = [
    createRequirement({ craft: SilverOre, quantity: 1 }),
  ];

  generatedFrom = [
    SilverPanningSite,
  ];

  storage = [
    OreStorage,
  ];
}
