import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import Forge from "../buildings/forge";
import Wood from "./wood";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import Foundry from "../buildings/foundry";
import HeartShapedPrint from "./heart-shaped-print";
import Gold from "./gold";
import Copper from "./copper";

export default class GoldPlatedHeartPendant extends Craft {
  name = "Gold-Plated Heart Pendant";

  requires = [
    createRequirement({ craft: HeartShapedPrint, quantity: 1 }),
    createRequirement({ craft: Copper, quantity: 1 }),
    createRequirement({ craft: Gold, quantity: 2 }),
  ];

  generatedFrom = [
    Foundry,
  ];

  storage = [
    JewelryStore,
  ];
}
